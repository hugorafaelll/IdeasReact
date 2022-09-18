import { List } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Form from '../components/form'
import CheckboxList from '../components/todos'

export default function Home() {
  return (
    <div>
    <Container maxWidth='xs' style={{marginTop: '1em'}}>
    <Form />
    <List sx={{ width: '100%', bgcolor: 'background.paper', marginTop:'1em'}} >
    <CheckboxList />
    </List>
</Container> 
    </div>
  )
}
