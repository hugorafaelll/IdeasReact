import React from "react";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

const inicialItems = [
  { id: "1", content: "Conteúdo 1" },
  { id: "2", content: "Conteúdo 2" },
  { id: "3", content: "Conteúdo 3" },
];

const inicialColumns = [
  {
    name: "Required",
    id: "221",
    items: inicialItems,
  },
  {
    name: "To do",
    id: "222",
    items: [],
  },
  {
    name: "In Process",
    id: "223",
    items: [],
  },
  {
    name: "Done",
    id: "227",
    items: [],
  },
];

function App() {
  const [columns, setColumns] = useState(inicialColumns);

  const onDragEnd = (result) => {
    console.log(result);
    let sourceColumnsItens = columns[0].items; //acessando itens da primeira coluna
    let draggedItem = {};
    console.log("foi");

    for (var i in sourceColumnsItens) {
      if (sourceColumnsItens[i].id == result.draggableId) {
        draggedItem = sourceColumnsItens[i];
      }
    }

    // EXCLUIR O OBJETO ARRASTADO
    let filteredSourceColumnsItens = sourceColumnsItens.filter(
      (item) => item.id !== result.draggableId
    );

    // adicionar o mesmo em uma nova posição
    filteredSourceColumnsItens.splice(1, 0, {});
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <Droppable droppableId={column.id} key={column.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h1>{column.name}</h1>
                <div
                  style={{
                    backgroundColor: "#2c3e50",
                    margin: 8,
                    width: 250,
                    minHeight: 500,
                    padding: 10,
                  }}
                >
                  {column.items.map((item, index) => (
                    <Draggable
                      draggableId={item.id}
                      index={index}
                      key={item.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            textAlign: "center",
                            backgroundColor: "#27ae60",
                            color: "white",
                            height: 40,
                            marginBottom: 10,
                            ...provided.draggableProps.style,
                          }}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
