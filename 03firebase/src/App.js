import React, {useState, useEffect, useReducer} from "react";
import axios from 'axios';


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

const reducer = (state, action) => {  // função para manipular um estado 
  // manipular meu estado 
  if(action.type === 'REQUEST'){
    return {
      ...state,
      loading:true
    }
  }
  if(action.type === 'SUCCESS')
  return{
    ...state,
    loading:false,
    action: action.data
    }
 
  }

  const useGet = url =>{

    const [data, dispatch] = useReducer( reducer,{
      loading:true,
      data:{}
    })
    
    
    useEffect( ()=>{ //hook para executar uma ação 
  
      dispatch({type:'REQUEST'})
      axios   // api firebase para trazer DATA
      .get(url)  // local da api
      .then(res =>{    //assyn com resposta da data no console
        
          dispatch ({type:'SUCCESS', data: res.data})
      })
    }, [] ) // []quer dizer que nao precisa de ningm para executar esta ação
    
    return data

  }
 


function App() {

const data = useGet(url)

  return (
    <div >
      <h1>Financas</h1>
      {JSON.stringify(data)}
      { data.loading && <p>CARREGANDO...</p>}
      
      
    </div>
  );
}

export default App;
