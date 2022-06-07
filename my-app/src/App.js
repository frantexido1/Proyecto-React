import Cines4d from './Components/cines4D.js';
import Ubicaciones from './Components/ubicaciones.js';
import {Container} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { Navbar } from './Components/Navbar';
import theme from './configuracionMUI/theme';
import ButtonModal from './Components/ButtonModal.js';

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
      <ButtonModal/>
    </ThemeProvider>
  );
}

export default App;