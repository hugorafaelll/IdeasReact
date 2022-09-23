import React, { useState } from "react";
const inicialColumns = [
  {
    name: "todo",
    id: "123",
  },
];

const items = [
  {
    id: "1",
    conteudo: "conteudo 1",
    id: "2",
    conteudo: "conteudo 2",
    id: "3",
    conteudo: "conteudo 3",
    id: "4",
    conteudo: "conteudo 4",
  },
];

function App() {
  const [columns, setColumns] = useState(inicialColumns);

  return (
    <div>
      {inicialColumns.map((column) => (
        <div style={{display:"flex", flexDirection:"column", alignItems:'center'}}>
          <h1>{column.name}</h1>
          <div style={{backgroundColor:'black', width:250,height:500}}>
              {column.items.map((iten) => (
                <div>texto</div>
              ))}
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default App;
