import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import { Route , Link, Routes } from "react-router-dom";
import Header from "./elements/header";
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

function App() {
  return (
    <Router>
      <div>
        <Header />
         <Home/>
         <Routes>
         <Route path="/" exact component={Home} />
         </Routes>
      </div>
   </Router>
  )
}

export default App; 
