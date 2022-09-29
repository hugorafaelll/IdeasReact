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
    id:'222',
    items:[]
  
  },
  {
    name: "In Process",
    id:'223',
    items:[]
  
  },
  {
    name: "Done",
    id:'227',
    items:[]
  },
];

function App() {
  const [columns, setColumns] = useState(inicialColumns);

  const onDragEnd = (result) => {
    console.log(result);
    // var sourceColumnItems = columns[0].items;
    var sourceColumnItems = [];
    var destinationColumnItems = [];
    var draggedItem = {};

    var sourceColumnId = 0;
    var destinationColumnId = 0;

    for (var i in columns) {
      if (columns[i].id == result.source.droppableId) {
        sourceColumnItems = columns[i].items;
        sourceColumnId = i;
      } else if (columns[i].id == result.destination.droppableId) {
        destinationColumnItems = columns[i].items;
        destinationColumnId = i;
      }
    }
    // console.log(sourceColumnItems)
    // console.log(destinationColumnItems)

    for (var i in sourceColumnItems) {
      if (sourceColumnItems[i].id == result.draggableId) {
        draggedItem = sourceColumnItems[i];
      }
    }
    // Excluí o objeto arrastado.
    var filteredSourceColumnItems = sourceColumnItems.filter((item) => item.id != result.draggableId);

    // Adicionar o mesmo na nova posição.
    if (result.source.droppableId == result.destination.droppableId) {
      filteredSourceColumnItems.splice(result.destination.index, 0, draggedItem);

      // Mudar o state
      var columnsCopy = JSON.parse(JSON.stringify(columns));
      columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
      setColumns(columnsCopy);
    } else {
      destinationColumnItems.splice(result.destination.index, 0, draggedItem);
      // Mudar o state
      var columnsCopy = JSON.parse(JSON.stringify(columns));
      columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
      columnsCopy[destinationColumnId].items = destinationColumnItems;
      setColumns(columnsCopy);
    }
  };

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
