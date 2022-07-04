import React, { useEffect, useState } from 'react';
import { ThemeProvider, Container, Grid } from '@mui/material';
import { Navbar } from './Components/Navbar/Navbar';
import Footer from './Components/Navbar/Footer';
import theme from './configuracionMUI/theme';
import SweetAlert from './Components/Navbar/SweetAlert.js';
import Cards from './Components/Cards/Cards';
import Cines4d from './Components/Main/cines4D';
import Ubicaciones from './Components/Main/ubicaciones';
import Slider from "./Components/Slider/Slider";
import Estrenos from './Components/Estrenos/Estrenos';


function App() {
  const [data, setData] = useState([])

  const getMovies = async () => {
    const res = await fetch("http://localhost:3000/funciones").then(res => res.json())
    setData(res)
  }
  useEffect(() => {
    getMovies()
  }, [])



  return (
    <ThemeProvider theme={theme}>
      <SweetAlert />
      <Navbar />
      <Slider />
      <Container sx={{ marginY: 5 }}>

        <Grid container spacing={3}>

          {data.map((pelicula, index) => (
            <Cards title={pelicula.title} img={pelicula.img} id={pelicula.id} category={pelicula.category} price={pelicula.price} key={index} />
          ))}

        </Grid>

      </Container>


      <Container maxWidth="lg">
        <Cines4d />
      </Container>
      <Container>
        <Estrenos />
      </Container>
      <Container maxWidth="lg">
        <Ubicaciones />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;