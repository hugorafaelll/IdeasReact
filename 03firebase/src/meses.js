import React from "react";
import Rest from './rest';
import { Link } from "react-router-dom";

const baseUrl = 'https://financas-hugo-default-rtdb.firebaseio.com/'

    const {useGet} = Rest(baseUrl)

    const Meses = () => {
    const data = useGet('meses')
    if(data.loading){
    return   <span>... Carregando</span>
    }
    return(
    <table className="table">
    <thead>
        <tr>
            <th>Entrada</th>
            <th>valor</th>
            <th>saida</th>
            <th>valor</th>
        </tr>
    </thead>
    <tbody>
    {
        Object
        .keys(data.data)
        .map(mes =>{
            return(
            <tr key={mes}>
                <td><Link to={`/movimentacoes/${mes}`}>{mes}</Link></td>
                <td>{data.data[mes].valor}</td>
                <td>{data.data[mes].saida}</td>
                <td>{data.data[mes].valor}</td>
                </tr>
            )
        })
    }
</tbody>
</table>
)
}

export default Meses