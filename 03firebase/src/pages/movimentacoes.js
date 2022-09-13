import React from "react";

const Movimentacoes = (props) => {
    return(
      <div className="container">
      <h1 className="color red">Movimentaçoes</h1>
      <pre>{JSON.stringify(props)}</pre>
      </div> 
    )
  }

  export default Movimentacoes
