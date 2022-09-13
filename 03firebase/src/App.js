import React from "react";
import {BrowserRouter as Router,Route , Link, Routes } from "react-router-dom";
import Header from "./elements/header";
import Movimentacoes from "./pages/movimentacoes";
import Home from "./pages/Home/index";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/movimentacoes/:data"  component={Movimentacoes} />
         </Routes>
      </div>
   </Router>
  )
}

export default App; 
