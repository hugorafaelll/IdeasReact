import React, { useState } from 'react'
import { Button, TextField , Paper} from '@mui/material'


export default function Form({ todoHandler }) {
  const [text, setText] = useState(null)
  const [id,setId] = useState(0)

  const todoCreate = (text) => {   // criando um objeto para todos itens ter id
      const todoObj = {text:text, id:id};
      setId(id+1);
      todoHandler(todoObj)
  }


  return (
    <Paper style={{ padding:"1em"}}>
      <div style={{ display:'flex', justifyContent:'center'}}>
        <TextField id="outlined-basic" label="Tarefas" variant="outlined" fullWidth onChange={(e) => setText(e.target.value)}/>
        <Button variant="text" onClick={() => todoCreate(text) }>Add</Button>
      </div>
    </Paper>
  )
}
