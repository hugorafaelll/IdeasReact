import React from "react";
import Rest from "../pages/utils/rest";

const baseUrl = "https://financas-hugo-default-rtdb.firebaseio.com/";

const { useGet } = Rest(baseUrl);

const Movimentacoes = (props) => {
  return (
    <div className="container">
      <h1>Movimentações</h1>
      <pre>{JSON.stringify(props.match.params.data)}</pre>
    </div>
  );
};

export default Movimentacoes;
