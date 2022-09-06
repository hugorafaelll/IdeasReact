import React from "react";
import axios from 'axios';


// axios
// .get('https://financas-hugo-default-rtdb.firebaseio.com/valor.json')
// .then(res => {
//   console.log(res.data.chave)
// }) 


axios
.post('https://financas-hugo-default-rtdb.firebaseio.com/valor.json', 
{
  outroDado :'hugo Rafael '
})
.then(res =>{
  console.log(res.data)
})

function App() {
  return (
    <div >
      <h1>Financas</h1>
    </div>
  );
}

export default App;
