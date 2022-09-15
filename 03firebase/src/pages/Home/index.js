import React from "react";
import Meses from "./meses";
import AdicionarMes from "./adicionarMes";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"



const Home = () =>{
    return(
      <div className="container" >
      <h3>ESTA E A HOME</h3>
          <AdicionarMes/>
          <Meses/>
      </div>
    )
  }

 export default Home