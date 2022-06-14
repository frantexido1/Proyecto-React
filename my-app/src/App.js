import React from 'react';
import { ThemeProvider, Container, Grid } from '@mui/material';
import { Navbar } from './Components/Navbar';
import theme from './configuracionMUI/theme';
import Cards from './Components/Cards';
import Peliculas from "./Components/db.json";
import Cines4d from './Components/cines4D.js';
import Ubicaciones from './Components/ubicaciones.js';
import ButtonModal from './Components/ButtonModal/ButtonModal.js';

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
                ))}
            </Container>


          
          <Container maxWidth="lg">
            <Cines4d />
          </Container>
          <Container maxWidth="lg">
            <Ubicaciones/>
          </Container>
          <ButtonModal/>
        </ThemeProvider>

    </div>



  );
};

export default App;