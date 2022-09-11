import { useEffect, useReducer } from "react"
import axios from "axios"

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

  const baseUrl = 'https://financas-hugo-default-rtdb.firebaseio.com/'

  const useGet = url => {
    const [data, dispatch] = useReducer(reducer,{
      loading:true,
      data:{}
    })
    useEffect(() =>{
        dispatch({type:'REQUEST'})
        axios
        .get(baseUrl+ resource +'.json')
        .then(res => {
          dispatch({type:'SUCCESS', data:res.data})
        })
  
   
    },[]) //> [] significa que e independente e vai rodar apenas da primeira vez
      return data // quem eu quero mostrar do lado de fora 
  }

  export default useGet