import { useReducer } from 'react'



function UseReducerM () {
    
const initialState = {count: 0 };

function reducer (state, action){
    switch (action.type) {
        case 'decrement':
            return {count:state.count - 1 };
            case 'increment':
                return {count: state.count + 1};
                default:
                    return state;
    }
}
const [state, dispatch ] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Counter com useReducer</h3>
                <button onClick={() => dispatch({type:'decrement'})}>diminuir</button>
                <span>{state.count}</span>
                <button onClick={() => dispatch({type:'increment'})}>aumentar</button>


        <h4>diferençã de useState e usereducer e como ele se organiza, use reducer e um state que armazena varios estados menores e isto mantem uma organização melhor </h4>
        </div>
    )

}
 

export default UseReducerM
