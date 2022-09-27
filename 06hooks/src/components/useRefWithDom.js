import { useState , useEffect, useRef} from "react";

export default function RefInteractingWithDown() {
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef();
 
    function showFakeModal (){
        setShowModal(true)
    }




    useEffect(() => {
 inputRef.current?.focus(); // se for verdadeiro retornar o .focus  
    }, [showModal]) // quando o showModal for ativado
// resumo quando o showModal for acionado ? se houver input focar no imput 

return (
    <div>
    <h1>useRef para interagir com o elemento DOM</h1>
    <button onClick={showFakeModal}>Email</button>
    {showModal && (  // se a variavel for verdadeira &&
        <div>
            <label htmlFor="email"> Email </label>
            <br/>
            <input ref={inputRef} id='email' type='email' />

        </div>
    )}
    </div>










    )

}