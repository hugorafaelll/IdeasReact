import React from "react";
import Rest from "./rest";
import Header from "./elements/header";



const baseUrl = 'https://financas-hugo-default-rtdb.firebaseio.com/'

const {useGet,usePost, useDelete} = Rest(baseUrl)

function App() {
  const data = useGet('/meses')
 // const data = useGet('financas/movimentacao/06-2022/01')
  // const [postData,post] = usePost('financas/movimentacao/06-2022/01')
  // const [deleteData, remove] = useDelete()

  const saveNew =() =>{
  //  post ({valor:77,descrição:'valor'})
  }
const doRemove = () =>{ 
 // remove('financas/movimentacao/06-2022/-NBbo1lDS1kOTQ2ED7j9')
  
}

  //JSON.stringfy maneira de inspecionar o que tem dentro do objeto

  return (
    <div >
      <Header/>
        <div className="container" >
        <h2>Adicionar mes</h2>
        <select>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        </select>
        <select>
        <option value='01'>01</option>
        <option value='02'>02</option>
        <option value='03'>03</option>
        </select>
        <button>Adicionar Mes</button>

        {
          data.loading && <span>... Carregando</span>
        }
        {
          !data.loading && (
            <table className="table">
              <thead>
                <tr>
                    <th>Entrada</th>
                    <th>valor</th>
                    <th>saida</th>
                    <th>valor</th>
                </tr>
              </thead>
              <tbody>
              {
                Object
                  .keys(data.data)
                  .map(mes =>{
                    return(
                      <tr key={mes}>
                          <td>{mes}</td>
                          <td>{data.data[mes].entrada}</td>
                          <td>{data.data[mes].valor}</td>
                          <td>{data.data[mes].saida}</td>
                          <td>{data.data[mes].valor}</td>
                       </tr>
                    )
                  })
              }
              
              
              </tbody>
              </table>
              
              
              )
            }
            <pre>{JSON.stringify(data)}</pre>
     
  
 

        </div>

     
    </div>
  );
}

export default App;
