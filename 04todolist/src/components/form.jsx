import React from 'react'
import { Button, TextField , Paper} from '@mui/material'
import { red } from '@mui/material/colors'


export default function Form() {
  return (
    <Paper style={{ padding:"1em"}}>
    <div style={{ display:'flex', justifyContent:'center'}}>
    <TextField id="outlined-basic" label="Tarefas" variant="outlined" fullWidth />
    <Button variant="text">Add</Button>
    </div>
    </Paper>
  )
}
