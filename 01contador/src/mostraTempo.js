import React from "react";


const MostraTempo = (props) => {
    const tempo = props.tempo
    const minutos = Math.round(tempo/60)
    const seconds = tempo % 60
    const minutosStr = minutos <10 ? '0' + minutos: minutos
    const secondsStr = seconds <10  ? '0' + seconds : seconds

  return (
    <p className="timer">{`${minutos}:${seconds}`}<br/><br/>
    Tempo medio por Voltas
    </p>
  )
}

export default MostraTempo