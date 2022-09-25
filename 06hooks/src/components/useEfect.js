import {useState, useEffect} from 'react'
import { Container, Button } from "@mui/material";


function SegundoHook(){
 const  [counter, setCounter] = useState(0);

useEffect(() => {
    document.title = 'Mudando o title com useEffect'
},[])

useEffect(() => {
    alert('valor do counter' + counter)
}, [counter])

 function increaseCounter () {
    setCounter(counter+1);
 }

    return (
        <div>
            <h3> testando o segundo conponent</h3>
               <p> realizar uma ação x quando outra ação y ocorrer, ação colateral </p>
               <h4>{counter}</h4>
               <button onClick={increaseCounter}> useState ainda</button>
        </div>
    )

}

export default SegundoHook