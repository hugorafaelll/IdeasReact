import { useReducer,useEffect } from "react";
import axios from "axios";


const baseUrl = 'https://financas-hugo-default-rtdb.firebaseio.com/financas/movimentacao/'

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
      return state
    }


const init = baseUrl => {

    const useGet = resource =>{
        const [data, dispatch] = useReducer( reducer,{
          loading:true,
          data:{}
        })
        useEffect( ()=>{ //hook para executar uma ação 
          dispatch({type:'REQUEST'})
          axios   // api firebase para trazer DATA
          .get(baseUrl+resource+'.json')  // local da api
          .then(res =>{    //assyn com resposta da data no console
              dispatch ({type:'SUCCESS', data: res.data})
          })
        } ) // []quer dizer que nao precisa de ningm para executar esta ação
        return data
    } 

    const usePost = resource => {
    const [data, dispatch] = useReducer( reducer,{
        loading:false,
        data:{}
      })
    const post = data =>{
        dispatch ({type:'REQUEST'})
        axios
            .post(baseUrl+resource+'.json', data)
            .then(res =>{
                dispatch ({
                type:'SUCCESS',
                data: res.data
            })
        })
    } 
    return [data , post]
}

const useDelete = () => {

    const [data, dispatch] = useReducer( reducer,{
        loading:false,
        data:{}
      })
      

    const remove = resource =>{
        dispatch ({type:'REQUEST'})
        axios
            .delete(baseUrl+resource+'.json')
            .then(()=>{
                dispatch ({
                type:'SUCCESS',
              
            })
        })
    } 
    return [data , remove]
}


        return {
            useGet,
            usePost,
            useDelete
        }
}


export default init