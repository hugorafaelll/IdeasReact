import React from "react";
import {
BrowserRouter as Router,
Routes,
Route,
Link 
} from "react-router-dom";

import Header from "./elements/header";
import Home from "./pages/Home/index";
import Movimentacoes from "./pages/movimentacoes";

function App() {
  return (
    <Router>
      <div>
      <Header/>
            <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/movimentacoes/:data" element={< Movimentacoes/>} />
            </Routes>

        </div>
    </Router>
  );
}

export default App;
