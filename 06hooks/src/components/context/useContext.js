import { useEffect, useContext, useState } from "react"
import { CounterContext } from "./CounterContext";
import { HandleCounter } from "./handleCounter";



export default function QuartoHook (){
    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={{counter, setCounter}} >  
        <div>
        <HandleCounter/>
        <DobleCounter />

        <div>
        <h1>UseContext</h1>
    <h3> Responsavel por passar dados por uma arvore de componentes sem necessidade de classificalos como props</h3>
    <h4>Para isto ele precisa ser o componente pai  Context.Provider</h4>
    </div>
        

        </div>
        
        
        
        </CounterContext.Provider>
    )
}





