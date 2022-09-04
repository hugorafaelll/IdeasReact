import React , {useState, useEffect} from "react";

//toda vez que ultiliza letra Maiuscula o react sabe que e um componente 
// e letra minuscula ele sabe que é ujm elemento 

//consigo enviar valores para um componente via props
//props == propriedades
// ou parametros da função


//hook gancho com mundo esterno [ useStats, setUseState]
//useEfect usa uma função somente quando estivermos chamando ela 

const MostrarVoltas = (props)=> { //arow function função em flecha
  return (
    <p>{props.voltas}
      <br/>
      Voltas
      </p>
  )
}

const MostraTempo = (props) => {
  return (
    <p>{props.tempo}<br/><br/>
    Tempo medio por Voltas
    </p>
  )
}
const Button = (props) => <button onClick={props.onCLick}>{props.texto}</button>


function App() {
  let [numVoltas, setNumVoltas]=useState(32);
  const increment = () =>{
    setNumVoltas(numVoltas+1)}
  const decrement = () =>{
    setNumVoltas(numVoltas-1)}
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    setInterval(() => {
      },1000)}, [])
    
    


  return (
    <div className='App'>
     <MostrarVoltas voltas={numVoltas}/> 
    <Button texto='+' onCLick={increment}/>
    <Button texto='-' onCLick={decrement}/>
    <MostraTempo tempo={tempo}/>
    <Button texto='Iniciar'/>
    <Button texto='Reiniciar'/>
    </div>
  );
}

export default App;
