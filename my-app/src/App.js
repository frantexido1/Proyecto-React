import React from 'react';
import { ThemeProvider, Container, Grid } from '@mui/material';
import { Navbar } from './Components/Navbar';
import theme from './configuracionMUI/theme';
import Cards from './Components/Cards';
import Peliculas from "./Components/db.json";
import { CartProvider } from './Components/CartContext';




function App() {
  return (
     <div classname="App">
    <ThemeProvider theme={theme}>
      <Navbar/>
    <CartProvider>
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
    </CartProvider>
    </ThemeProvider> 
    </div>
  );
};

export default App;