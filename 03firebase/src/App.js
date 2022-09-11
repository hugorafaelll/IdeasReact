import React from "react";
import Rest from "./rest";

const baseUrl = 'https://financas-hugo-default-rtdb.firebaseio.com/'

const {useGet,usePost, useDelete} = Rest(baseUrl)

function App() {
  const data = useGet('financas/movimentacao/06-2022/01')
  const [postData,post] = usePost('financas/movimentacao/06-2022/01')
  const [deleteData, remove] = useDelete()

  const saveNew =() =>{
    post ({valor:77,descrição:'valor'})
  }
const doRemove = () =>{ 
  remove('financas/movimentacao/06-2022/-NBbo1lDS1kOTQ2ED7j9')
  
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
       <button onClick={doRemove}> DELETAR </button>
       <pre>{JSON.stringify(deleteData)}</pre> 
    </div>
  );
}

export default App;
