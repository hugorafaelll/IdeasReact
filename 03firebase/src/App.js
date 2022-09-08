import React, {useState, useEffect, useReducer} from "react";
import axios from 'axios';
import useGet from "./useGet";
import usePost from "./usePost";
// axios
// .get('https://financas-hugo-default-rtdb.firebaseio.com/valor.json')
// .then(res => {
//   console.log(res.data.chave)
// }) 


// axios
// .post('https://financas-hugo-default-rtdb.firebaseio.com/valor.json', 
// {
//   outroDado :'hugo Rafael '
// })
// .then(res =>{
//   console.log(res.data)
// })

const url = 'https://financas-hugo-default-rtdb.firebaseio.com/financas/movimentacao.json'




function App() {

const data = useGet(url)
const [postData, post] = usePost(url)



const saveNew = () =>{
  post({valor:30, descricao:'add macararam'})
} 

console.log(postData)
  return (
    <div >
      <h1>Financas</h1>
      {JSON.stringify(data)}
      { data.loading && <p>CARREGANDO...</p>}<br></br>
      <button onClick={saveNew} >Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      
    </div>
  );
}

export default App;
