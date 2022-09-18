import { List, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import Form from '../components/form'
import CheckboxList from '../components/todos'

export default function Home() {
const [todos, setTodos]= useState([])

const todoHandler = (todo) =>{
  setTodos([...todos,todo]); // pega todo array todos ...  e adiciona o novo todo gerado pelo map 
}


  return (
    <div>
    <Container maxWidth='xs' style={{ marginTop: '1em'}}>
        <Form todoHandler={todoHandler} />
            <List sx={{ width: '100%',  marginTop:'1em'}} >
            {todos.map( (todo) =>( 
                <div style={{marginTop:'1em'}} >
                    <CheckboxList todo={todo.text} />
                </div>
            ) )}
            </List>
    </Container> 
    </div>
  )
}
