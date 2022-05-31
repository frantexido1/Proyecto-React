import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Navbar } from './Components/Navbar';
import theme from './configuracionMUI/theme';
import Cards from './Components/Cards';
// import {Carrusel} from './Components/Carrusel';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Peliculas from "./Components/db.json"




function App() {
  return (
     <div classname="App">
    <ThemeProvider theme={theme}>
      <Navbar/>
    


    <Container sx={{ marginY: 5}}>
    

    {Peliculas.map((pelicula) => (
      <>
       <Grid container spacing={5}>
       { pelicula.funciones.map((funcion, index) => (
        <Cards funcion={funcion} key={index}/>
       ))}
       </Grid>
  
     </>
     ))};
    
    </Container>
    </ThemeProvider> 
    </div>
  );
}

export default App;