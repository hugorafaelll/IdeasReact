import { List, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Form from "../components/form";
import CheckboxList from "../components/todos";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]); // pega todo array todos ...  e adiciona o novo todo gerado pelo map
  };

  const deleteTodo = (id) => {
    let filtrado = todos.filter((todo) => todo.id !== id);
    setTodos(filtrado);
  };


  const editTodo = (id, editedText) => {
    var todosArray = todos;

    for (var i in todosArray) {
      if (todosArray[i].id == id) {
        todosArray[i].text = editedText;
      }
    }

 
    setTodos(todosArray);
  };
  return (
    <div>
      <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form addTodo={addTodo} />
        <List sx={{ width: "100%", marginTop: "1em" }}>
          {todos.map((todo, key) => (
            <div key={todo.id} style={{ marginTop: "1em" }}>
              <CheckboxList
                todo={todo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
}
