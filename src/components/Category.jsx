import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks, GiWhiteBook} from "react-icons/gi"; //website: https://react-icons.github.io/react-icons/"
import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Category() {
    return (
        <List>
            <StyledLink to={"/Cuisine/Italian"}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </StyledLink>
            <StyledLink to={"/Cuisine/American"}>
                <FaHamburger/>
                <h4>American</h4>
            </StyledLink>
            <StyledLink to={"/Cuisine/Chinese"}>
                <GiNoodles/>
                <h4>Chinese</h4>
             </StyledLink>
             <StyledLink to={"/Cuisine/Thai"}>
                <GiChopsticks/>
                <h4>Thai</h4>
             </StyledLink>
       </List>
     );
};

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem, 0rem;
`;

const StyledLink = styled(NavLink)`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 2rem;
        text-decoration: none;
        background: linear-gradient(35deg, #5f5f5f, #303030);
        width: 8rem;
        height: 8rem;
        cursor: pointer;
        transform: scale(0.8);
    h4 {
        color: white;
        font-size: 0.8 rem;
        margin: 0.5rem;

    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #eef538, #a6f8a2);
        h4 {
        color: #2d2d2d;
        font-size: 0.8 rem;
        margin: 0.5rem;

    }
    svg{
        color: #2d2d2d;
        font-size: 1.5rem;
    }}
`;

export default Category
