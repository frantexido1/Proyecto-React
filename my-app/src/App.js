import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Navbar } from './Components/Navbar';
import theme from './configuracionMUI/theme';
import { Carrusel } from "./Components/Carrusel";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Carrusel/>
    </ThemeProvider>
  );
}

export default App;