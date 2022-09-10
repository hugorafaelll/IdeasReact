import React ,{useState,useEffect,useReducer}from "react";
import axios from "axios";

const url =   'https://financas-hugo-default-rtdb.firebaseio.com/financas/movimentacao/06-2022/01.json'

//função pura ... posso usar esta mesma função com outros parametros mais facil de testar
const reducer = ( state, action) => {
  if(action.type === 'REQUEST'){
    return {
      ...state,
      loading:true
    }
  }
  if(action.type === 'SUCCESS'){
    return{
      ...state,
      loading:false,
      data:action.data
    }
  }
  return state
}

function App() {
  const [data, dispatch] = useReducer(reducer,{
    loading:true,
    data:{}
  })
  useEffect(() =>{
      dispatch({type:'REQUEST'})
      axios
      .get(url)
      .then(res => {
        dispatch({type:'SUCCESS', data:res.data})
      })

 
  },[]) //> [] significa que e independente e vai rodar apenas da primeira vez


  return (
    <div >
      <h1>Financas</h1><span>learn about Hooks</span>
      <h4> Biblioteca - CRUD consumo api REST</h4>


      <h4>Aplicação</h4>
       {JSON.stringify(data)} 
       {data.loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
