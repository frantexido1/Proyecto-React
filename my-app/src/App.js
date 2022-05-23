import './App.css';
import Cines4d from './components/cines4D';
import {Container,Grid} from '@mui/material';

function App() {
  return (
    <>
    <p>sdasdajsdajsdjasdhashdas</p><Container maxWidth="md">
      <Grid container spacing={3} sx={{ padding: "15px", alignContent: "center", backgroundColor: "#251F1F", borderRadius: "10px", boxShadow: "10px" }}>
        <Cines4d />
      </Grid>


    </Container>
    </>

    
  );
}

export default App;
