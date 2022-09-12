import React from "react";
import Rest from './rest';

const baseUrl = 'https://financas-hugo-default-rtdb.firebaseio.com/'

const {useGet,usePost, useDelete} = Rest(baseUrl)


const meses = () => {
    const data = useGet('meses')
    return (
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
             
    )
}