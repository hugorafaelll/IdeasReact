import { useReducer, useEffect } from "react"
import axios from "axios"

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
  
  
  const useGet = url => {
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
      return data // quem eu quero mostrar do lado de fora 
  }

  export default useGet