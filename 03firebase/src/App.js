import React from "react";
import Rest from "./rest";
import Header from "./elements/header";

import Meses from "./meses";
import AdicionarMes from "./adicionarMes";

const baseUrl = 'https://financas-hugo-default-rtdb.firebaseio.com/'

const {useGet} = Rest(baseUrl)

function App() {
  const data = useGet('meses')
 // const data = useGet('financas/movimentacao/06-2022/01')
  // const [postData,post] = usePost('financas/movimentacao/06-2022/01')
  // const [deleteData, remove] = useDelete()

  // const saveNew =() =>{
  //  post ({valor:77,descrição:'valor'})
    
// const doRemove = () =>{ 
 // remove('financas/movimentacao/06-2022/-NBbo1lDS1kOTQ2ED7j9')
  


  //JSON.stringfy maneira de inspecionar o que tem dentro do objeto

  return (
    <div >
      <Header/>
        <div className="container" >
        <AdicionarMes/>
        <Meses/>
   
      
  
 

        </div>

     
    </div>
  );
}

export default App;
