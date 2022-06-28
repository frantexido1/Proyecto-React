import React, { useEffect } from 'react';
import { ThemeProvider, Container, Grid } from '@mui/material';
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



function App() {
// desde aca hacer la llamada con un useEffect, una vez que tenga la data,

const getMovies= async() =>{
  const res= await fetch("http://localhost:3000/funciones").then(res => res.json())
  
}

  useEffect(()=>{
    getMovies()
  },[])




  return (
      <ThemeProvider theme={theme}>
        <SweetAlert />
        <Navbar/>
        <Slider />
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
          <Container>
            <Estrenos />
          </Container>
          <Container maxWidth="lg">
            <Ubicaciones/>
          </Container>
          <Footer />  
        </ThemeProvider>
  );
};

export default App;