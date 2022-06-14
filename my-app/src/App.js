import React from 'react';
import { ThemeProvider, Container, Grid } from '@mui/material';
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer.js';
import theme from './configuracionMUI/theme';
import SweetAlert from './Components/SweetAlert.js';
import Cards from './Components/Cards';
import Peliculas from "./Components/db.json";
import Cines4d from './Components/cines4D.js';
import Ubicaciones from './Components/ubicaciones.js';

function App() {
  return (
        <ThemeProvider theme={theme}>
          <SweetAlert />
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

              <Footer />  
        </ThemeProvider>
  );
};

export default App;