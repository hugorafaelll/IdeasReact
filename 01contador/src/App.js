import React , {useState, useEffect} from "react";

import MostrarVoltas from "./mostravoltas";
import MostraTempo from "./mostraTempo";
import Button from "./button";
import './styles.css'

//toda vez que ultiliza letra Maiuscula o react sabe que e um componente 
// e letra minuscula ele sabe que é ujm elemento 

//consigo enviar valores para um componente via props
//props == propriedades
// ou parametros da função


//hook gancho com mundo esterno [ useStats, setUseState]
//useEfect usa uma função somente quando estivermos chamando ela 

function App() {
  let [numVoltas, setNumVoltas]=useState(0);
  const [runing,setRuning] = useState(false)
  const [tempo,  setTempo] = useState(0)

  useEffect(() => {
    let timer = null 
    if(runing){   
      timer =  setInterval(() => {
        setTempo( old => old+1)
   }, 1000)
    }
    return () =>{
      if (timer){
        clearInterval(timer)
          }
        }
      }, [runing])
    
const toggleRuning =() => { // interruptor no runing 
  setRuning(!runing)
}
 

  const increment = () =>{
    setNumVoltas(numVoltas+1)}
  const decrement = () =>{
    setNumVoltas(numVoltas-1)}

    const reset = () => {
      setNumVoltas(0)
      setTempo(0)
    }


  return (
    <div >
    <p>Exercicio pratico para utilização de HOOK useState e UseEfect <br/>
    cronometro para contagem de exercicios </p>
    
    <br/>
     <MostrarVoltas voltas={numVoltas}/> 
    <Button texto='+'  onCLick={increment}/>
    <Button texto='-' onCLick={decrement}/>
    <MostraTempo tempo={tempo}/>
    <Button texto='Iniciar' onCLick={toggleRuning} />
    <Button texto='Reiniciar' onCLick={reset} />
   
    </div>
  );
}

export default App;
