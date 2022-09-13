import React from "react";
import Meses from "./meses";
import AdicionarMes from "./adicionarMes";




const Home = () =>{
    return(
    <div className="container" >
      <AdicionarMes/>
      <Meses/>
    </div>
    )
  }

  export default Home