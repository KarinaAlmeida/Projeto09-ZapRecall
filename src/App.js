import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle"
import Logo from "./Components/Logo"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"

export default function App() {


  return (
    <Container>
      <GlobalStyle />
     <Logo />
     <Cards />
     <Footer />
    </Container>
  );
}




const Container = styled.div ` 
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`


