import {useRef} from 'react'

function TerceiroHook () {
const counterRef = useRef(0);

function increaseCounter () {
    counterRef.current = counterRef.current+1
}

function showCounter(){
    alert('o botao foi clicado ' + counterRef.current + ' vezes' )
}


    return (
        <div>
            <h1>UseRef</h1>
            <h2>Alternativa ao useState para armazenar valores </h2>
            <h3>Principal Diferença</h3>
            <h3>cada vez que o useState e usado o componente e renderizado novamente, o useRef nao necessariamente muda o  componente quando e atualizado</h3>
            <h4>usar o useRef no lugar do useState sempre que possivel</h4>
            <h5>para evitar renderizações desnecessarias na aplicação </h5>
                <button onClick={increaseCounter}>Clicar</button>&nbsp
                <button onClick={showCounter}>Mostrar clicks</button>
           

        </div>
    )

}
 

export default TerceiroHook
