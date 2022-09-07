import axios from "axios"
import { useReducer } from "react"
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