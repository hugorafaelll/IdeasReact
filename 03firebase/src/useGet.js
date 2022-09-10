import axios from "axios"
import { useReducer,useEffect } from "react"

const reducer = (state, action) => {  // função para manipular um estado 
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


 
  const saveNew = () =>{  //função para postar 
    post({valor:17, descricao:'macararam'})
  }


  const useGet = url =>{

    const [data, dispatch] = useReducer( reducer,{ // dispatch dispara uma ação no reducer 
      loading:true,
      data:{}
    }) 
    
    
    useEffect( ()=>{ //hook para executar uma ação 
  
      dispatch({type:'REQUEST'}) // para disparar uma ação
      axios   // api firebase para trazer DATA
      .get(url)  // local da api
      .then(res =>{    //assyn com resposta da data no console
        
          dispatch ({type:'SUCCESS', data: res.data})
      })
    },[]) // []quer dizer que nao precisa de ningm para executar esta ação
    
    return data

  }
 
  export default useGet