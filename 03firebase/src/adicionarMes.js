import React from "react";
import Rest from './rest';

    const AdicionarMes = () => {
        return(
                <React.Fragment>
            <h2>Adicionar mes</h2>
            <select>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
            </select>
            <select>
                <option value='01'>01</option>
                <option value='02'>02</option>
                <option value='03'>03</option>
            </select>
            <button>Adicionar Mes</button>
            </React.Fragment>
        )
    }
     
    export default AdicionarMes

    