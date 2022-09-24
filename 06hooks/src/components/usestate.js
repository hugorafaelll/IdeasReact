import {useState} from 'react'
import { Container, Button } from "@mui/material";


function PrimeiroHook(){

    const [title, setTitle] = useState("Estado inicial");

    function handleTitle() {
        setTitle("Estado Modificado");
      }


    return (
        <div>
            <h3>Serve para adicionar valor em uma variavel, e uma função que retorna dois valores a variavel em si que armazena o valor do estado  e o setX que altera a função desta variavel, cria uma variavel nova e substitui a antiga por ela</h3>

            <h4>exemplo: const [antiga,nova] = useState('valor inicial do estado');</h4>


            <h2>{title}</h2>
            <Button variant="outlined" onClick={handleTitle}>
              modificar texto
            </Button>

        </div>
    )

}

export default PrimeiroHook