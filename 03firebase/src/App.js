import React from "react";
import useGet from "./useGet";

import usePost from "./usePost";

const url =   'https://financas-hugo-default-rtdb.firebaseio.com/financas/movimentacao/06-2022/01.json'

function App() {
  const data = useGet(url)
  const [postData,post] = usePost(url)

  const saveNew =() =>{
    post ({valor:25,descrição:'cabelo'})
  }

  //JSON.stringfy maneira de inspecionar o que tem dentro do objeto

  return (
    <div >
      <h1>Financas</h1><span>learn about Hooks</span>
      <h4> Biblioteca - CRUD consumo api REST</h4>
 
 


      <h4>Aplicação</h4>
       {JSON.stringify(data)} 
       {data.loading && <p>Loading...</p>} <br></br>
       <button onClick={saveNew}> Salvar </button>
       <pre>{JSON.stringify(postData)}</pre> 
    </div>
  );
}

export default App;
