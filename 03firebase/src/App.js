import React, {useState, useEffect} from "react";
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

function App() {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})   //hook para mostrar na tela as "fotos"
  useEffect( ()=>{ //hook para executar uma ação 
    setLoading(true)
    axios  // api firebase para trazer DATA
    .get(url)  // local da api
    .then(res =>{    //assyn com resposta da data no console
      setData(res.data)
      setLoading(false)
    })
  }, [] ) // []quer dizer que nao precisa de ningm para executar esta ação

  return (
    <div >
      <h1>Financas</h1>
      {JSON.stringify(data)}
     { loading && <p>CARREGANDO...</p>}
          
    </div>
  );
}

export default App;
