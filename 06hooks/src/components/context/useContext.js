import { useEffect } from "react"




export default function QuartoHook (){
const [counter, setCounter] =useEffect(0)

    return (
        <div>
            <h1>UseContext</h1>
        <h3> Responsavel por passar dados por uma arvore de componentes sem necessidade de classificalos como props</h3>
        </div>
    )
}