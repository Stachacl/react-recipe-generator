import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav>
        <GiKnifeFork/>
         <Logo to={"/"}>So yummy</Logo>
       </Nav>
       <Search/>
       <Category/>
       <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: "Alex Brush";
  font-size: 5rem;
`;

const Nav =styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
      font-size: 5rem;
    }
`;

export default App;
