import {React, useState} from 'react';
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => { //e - is an event on Submit
        e.preventDefault(); //default -is a refresh page which we dont want
        navigate("/Searched/" + input); //send us to the searched page
    };

  return (
    <FormStyle onSubmit={submitHandler}> 
        <FaSearch/>
        <input onChange={(e) => setInput(e.target.value)} 
        type="text" 
        value={input}/>
    </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 3rem;
    position: relative;
    width: 100%;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 80%;
        display: flex;
        justify-content: center;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search;