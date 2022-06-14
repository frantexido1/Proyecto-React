import Cines4d from './Components/cines4D.js';
import Ubicaciones from './Components/ubicaciones.js';
import {Container} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer.js';
import theme from './configuracionMUI/theme';
import SweetAlert from './Components/SweetAlert.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SweetAlert />
      <Navbar />
      <Container maxWidth="md">
        <Cines4d />
      </Container>
      <Container maxWidth="md">
          <Ubicaciones/>
      </Container>



      <Footer />
    </ThemeProvider>

  );
}

export default App;