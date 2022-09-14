import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./elements/header";
import Movimentacoes from "./pages/movimentacoes";
import Home from "./pages/Home/index";

function App() {
  return (
    <Router>
      <div>
      <Header/>
        <Route path="/"  element={<Home />}></Route>
        </div>
    </Router>
  );
}

export default App;
