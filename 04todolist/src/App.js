import './App.css';
import Form from './components/form';
import CheckboxList from './components/todos';
import { Container } from '@mui/material';


function App() {
  return (

    <Container maxWidth='xs'>
    <Form />
    <CheckboxList />
    </Container> 
  );
}


export default App;
