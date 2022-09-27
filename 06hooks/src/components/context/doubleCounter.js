import { useEffect, useState, useContext} from "react";
import { CounterContext } from "./CounterContext";

export function DobleCounter () {
    const [DobleCounter, setDobleCounter] =  useState(0);
    const {counter} = useContext(CounterContext);

    useEffect(() =>{
        setDobleCounter(counter*2)
    },[counter])

    return (
        <h1> Dobro de counter {DobleCounter}</h1>
    )


}