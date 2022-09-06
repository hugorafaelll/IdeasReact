import React from "react";
import axios from 'axios';


axios
.get('https://financas-hugo-default-rtdb.firebaseio.com/valor.json')
.then(res => {
  console.log(res)
}) 


function App() {
  return (
    <div >
      <h1>Financas</h1>
    </div>
  );
}

export default App;
