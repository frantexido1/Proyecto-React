import React from 'react';
import { ThemeProvider, Container, Grid, Typography } from '@mui/material';
import { Navbar } from './Components/Navbar/Navbar';
import Footer from './Components/Navbar/Footer';
import theme from './configuracionMUI/theme';
import SweetAlert from './Components/Navbar/SweetAlert.js';
import Cards from './Components/Cards/Cards';
import Peliculas from "./Components/db.json";
import Cines4d from './Components/Main/cines4D';
import Ubicaciones from './Components/Main/ubicaciones';
import Slider from "./Components/Slider/Slider";
import Estrenos from './Components/Estrenos/Estrenos';
import styled from '@emotion/styled';

export const Title = styled(Typography)(() => ({
  fontSize: 22,
  marginBottom: 25,
  marginTop: 25,
  textAlign: 'center',
}))

function App() {
  return (
        <ThemeProvider theme={theme}>
          <SweetAlert />
            <Navbar/>

            <div id='Inicio'><Slider/></div>

            <Title  id='Cartelera' sx={{color: '#FF7700'}} gutterBottom>Cartelera</Title>
            <Container  sx={{ marginY: 5}}>
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

          <Title  id='Salas' sx={{color: '#FF7700'}} gutterBottom>Nuestras Salas</Title>        
          <Container maxWidth="lg">
            <Cines4d />
          </Container>

          <Container>
            <Estrenos />
          </Container>

          <Title  id='Sucursales' sx={{color: '#FF7700'}} gutterBottom>Sucursales</Title>        
          <Container maxWidth="lg">
            <Ubicaciones/>
          </Container>

          <div id='Contacto'><Footer /></div>


        </ThemeProvider>
  );
};

export default App;