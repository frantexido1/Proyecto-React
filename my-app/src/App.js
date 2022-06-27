import React from 'react';
import { ThemeProvider, Container, Grid } from '@mui/material';
import { Navbar } from './Components/Navbar';
import theme from './configuracionMUI/theme';
import Cards from './Components/Cards';
// import Peliculas from "./Components/db.json";
import Cines4d from './Components/cines4D.js';
import Ubicaciones from './Components/ubicaciones.js';
import ButtonModal from './Components/ButtonModal/ButtonModal.js';
import { CartProvider } from './Components/Cart/CartContext';


function App() {

   return (
     <div classname="App">
    <ThemeProvider theme={theme}>
      <CartProvider>
      <Navbar/>

    <Container sx={{ marginY: 5}}>
          <Navbar/>
    </Container>

    <Container sx={{ marginY: 5}}>
        <Grid  container spacing={5}>
          <Cards/>
        </Grid>
    </Container>
          
    <Container maxWidth="lg">
        <Cines4d />
    </Container>
    <Container maxWidth="lg">
        <Ubicaciones/>
    </Container>
          <ButtonModal/>
          </CartProvider>
        </ThemeProvider>

    </div>



  );
};

export default App;