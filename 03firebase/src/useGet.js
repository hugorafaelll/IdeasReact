import axios from "axios"
import React, { useReducer,useEffect } from "react"

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
 
  export default useGet