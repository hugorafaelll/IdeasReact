import React from "react";

const MostrarVoltas = (props)=> { //arow function função em flecha
    return (
      <p className="number" >
       <span className="span"> {props.voltas} </span>
        <br/>
        Voltas
        </p>
    )
  }

  export default MostrarVoltas