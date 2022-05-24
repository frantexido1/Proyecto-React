import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Navbar } from './Components/Navbar';
import theme from './configuracionMUI/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;