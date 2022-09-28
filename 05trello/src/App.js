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
    name: "Solicitado",
    id: "1",
    items: inicialItems,
  },
  {
    name: "To do",
    items:[]
  
  },
  {
    name: "In Process",
    items:[]
  
  },
  {
    name: "Done",
    items:[]
  },
];

function App() {
  const [columns, setColumns] = useState(inicialColumns);

  return (
    <div  style={{
      display: "flex",
      justifyContent: "center",
    
    }} >
      <DragDropContext>
        {inicialColumns.map((column) => (
          <Droppable droppableId={column.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <h1>{column.name}</h1>
                <div style={{ backgroundColor: "#2c3e50", margin:8, width: 250, minHeight: 500, padding: 10 }}>
                  {column.items.map((item, index)  => (
                    <Draggable draggableId={item.id} index={index} key={item.id} >
                      {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                          style={{
                            textAlign:'center',
                            backgroundColor: "#27ae60",
                            color:"white",
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
