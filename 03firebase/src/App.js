import React, {useState, useEffect, useReducer} from "react";
import axios from 'axios'; //api firebase
import useGet from "./useGet"; //criar 
import usePost from "./usePost"; // salvar
import useDelete from "./useDelete"; //deletar

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
const [deleteData, remove] = useDelete()

 
const saveNew = () =>{
  post({valor:30, descricao:'add macararam'})
} 

const doRemove =() => {
  remove('https://financas-hugo-default-rtdb.firebaseio.com/financas/movimentacao/-NBSbdmXcHmTTYCkcLee.json')
}

  return (
    <div >
      <h1>Financas</h1><span>learn about Hooks</span>
      <h4> Biblioteca - CRUD consumo api REST</h4>
      
      
      
      {JSON.stringify(data)}
      { data.loading && <p>CARREGANDO...</p>}<br></br>
      <button onClick={saveNew} >Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove} >Remover</button>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  );
}

export default App;
