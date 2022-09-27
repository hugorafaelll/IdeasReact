import { Container, Button } from "@mui/material";
import { useState } from "react";
import SegundoHook from "./components/useEfect";
import TerceiroHook from "./components/useRef";
import RefInteractingWithDown from "./components/useRefWithDom";
import PrimeiroHook from "./components/usestate";

function App() {
  let variavel = "HOOKS ";
  let variavel2 = "gerenciam os ciclos de vidas dos componentes do react";
  let variavel3 = "useState ";
 

  
  const [showContent, setShowContent] = useState(false);



  function handleContent(){
    setShowContent(!showContent)

  }

  return (
    <Container maxWidth="xs">
    
        <h1>{variavel}</h1> 
        <h6>{variavel2}</h6>
       
        <Button variant="outlined" onClick={handleContent}>
        useState
      </Button>
        {showContent && <PrimeiroHook/>}
        &nbsp;
        <Button variant="outlined" onClick={handleContent}>
        useEffect
      </Button>
      <SegundoHook/>
      <TerceiroHook/>
      <RefInteractingWithDown />
     
    </Container>
  );
}


export default App;
