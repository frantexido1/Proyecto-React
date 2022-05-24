import './App.css';
import Cines4d from './components/cines4D';
import Ubicaciones from './components/ubicaciones';
import {Container} from '@mui/material';

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Cines4d />
      </Container>
      <Container maxWidth="md">
          <Ubicaciones/>
      </Container>
    </>

    
  );
}

export default App;
