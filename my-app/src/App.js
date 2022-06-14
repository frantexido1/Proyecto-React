import Cines4d from './Components/cines4D.js';
import Ubicaciones from './Components/ubicaciones.js';
import { ThemeProvider,Container } from '@mui/material';
import { Navbar } from './Components/Navbar';
import theme from './configuracionMUI/theme';
import ButtonModal from './Components/ButtonModal/ButtonModal.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Container maxWidth="lg">
        <Cines4d />
      </Container>
      <Container maxWidth="lg">
          <Ubicaciones/>
      </Container>
      <ButtonModal/>
    </ThemeProvider>
  );
}

export default App;