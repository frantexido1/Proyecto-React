import Cines4d from './components/cines4D';
import Ubicaciones from './components/ubicaciones.js';
import {Container} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { Navbar } from './components/Navbar';
import theme from './configuracionMUI/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Container maxWidth="md">
        <Cines4d />
      </Container>
      <Container maxWidth="md">
          <Ubicaciones/>
      </Container>
    </ThemeProvider>

  );
}

export default App;