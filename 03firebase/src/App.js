import React from "react";
import {
BrowserRouter as Router,
Route,
Routes,
Link 
} from "react-router-dom";

import Header from "./elements/header";
import Home from "./pages/Home/index";

function App() {
  return (
    <Router>
      <div>
      <Header/>
            <Routes>
                   <Route path="/" element={<Home />} />
            
            </Routes>

        </div>
    </Router>
  );
}

export default App;
