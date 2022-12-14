import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] =useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailsData = await data.json();
        setDetails(detailsData);
    };

    useEffect(() => {
    fetchDetails ();
    }, [params.name]);

return (
    <DetailsWrapper>
     <div>
        <h2> {details.title} </h2>
        <img src={details.image} alt={details.title}/>
     </div>
     <div>
        <Info>
            <Button 
            className={activeTab === "instructions" ? "active" : ""} 
            onClick={() => setActiveTab("instructions")}>Instructions</Button>
            <Button 
            className={activeTab === "ingredients" ? "active" : ""} 
            onClick={() => setActiveTab("ingredients")}>Ingredients</Button>

            {activeTab === "instructions" && ( 
              <div>    
                <h4 dangerouslySetInnerHTML={{__html:details.summary }}></h4>
                <h5 dangerouslySetInnerHTML={{__html:details.instructions }}></h5>  
              </div>
            )}

           {activeTab === "ingredients" && ( 
            <ul>
              {details.extendedIngredients.map((ingredient) =>
              <li key={ingredient.id}>{ingredient.original}</li>)}
            </ul>
           )}

        </Info>
     </div>

    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`
  margin-top: 10rem ;
  margin-bottom: 5rem;
  margin-right: 10rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
    font-weight: 600;
    }
  h4{
    margin-top: 1rem;
    }
  h5{
    margin-top: 1rem;
    font-weight: 200;
    }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem ;
`;

export default Recipe