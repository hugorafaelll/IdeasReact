import React from 'react'
import { Button, TextField , Paper} from '@mui/material'
import { red } from '@mui/material/colors'


export default function Form() {
  return (
    <Paper style={{ padding:"1em"}}>
    <TextField id="outlined-basic" label="To-Do" variant="outlined" />
    <Button variant="text">Send</Button>
    </Paper>
  )
}
