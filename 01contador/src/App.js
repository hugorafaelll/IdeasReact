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
    const tempo = props.tempo
    const minutos = Math.round(tempo/60)
    const seconds = tempo % 60
    const minutosStr = minutos <10 ? '0' + minutos: minutos
    const secondsStr = seconds <10  ? '0' + seconds : seconds

  return (
    <p>{`${minutos}:${seconds}`}<br/><br/>
    Tempo medio por Voltas
    </p>
  )
}
const Button = (props) => <button onClick={props.onCLick}>{props.texto}</button>


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
    <Button texto='+' onCLick={increment}/>
    <Button texto='-' onCLick={decrement}/>
    <MostraTempo tempo={tempo}/>
    <Button texto='Iniciar' onCLick={toggleRuning} />
    <Button texto='Reiniciar' onCLick={reset} />
   
    </div>
  );
}

export default App;
