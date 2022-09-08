import React  from "react";
import Rest from "./rest";

const baseUrl = 'https://financas-hugo-default-rtdb.firebaseio.com/financas'


const { useGet, usePost , useDelete } = Rest(baseUrl)

function App() {

const data = useGet('movimentacao/06-2022')
const [postData, post] = usePost('movimentacao/06-2022')
const [deleteData, remove] = useDelete()

 
const saveNew = () =>{
  post({valor:17, descricao:'macararam'})
} 

const doRemove =() => {
 remove('/movimentacao/-NBSbdmXcHmTTYCkcLee')}

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
