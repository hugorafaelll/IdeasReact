import React from "react";
import {BrowserRouter as Router,Route , Link, Routes } from "react-router-dom";
import Header from "./elements/header";
import Meses from "./meses";
import AdicionarMes from "./adicionarMes";
import Movimentaçoes from "./pages/movimentacoes";
import Home from "./pages/Home";




function App() {
  return (
    <Router>
      <div>
        <Header />
         <Home/>
         <Routes>
         <Route path="/" exact component={Home} />
         <Route path="/movimentacoes/04" exact component={Movimentaçoes} />
         </Routes>
      </div>
   </Router>
  )
}

export default App; 
