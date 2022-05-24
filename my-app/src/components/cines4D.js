import {Paper,Grid,Box} from '@mui/material/';
import theme from '../theme';



export default function Cines4d() {
    return (
      <>
      <Box backgroundColor="primary">
        <p>safdjajfhdahdhsah</p>
      </Box>
      <Grid container spacing={3}  backgroundColor={theme.palette.primary} sx={{ padding: "15px",backgroundColor:'primary', alignContent: "center",  borderRadius: "10px", boxShadow: "10px" }}>
        <Grid item xs={6}>
          <Paper elevation={3} square sx={{ backgroundColor: "rgba(94, 94, 94, 0.5)" }}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Diagrama_de_teatro_4D.jpg/330px-Diagrama_de_teatro_4D.jpg' alt='' />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} square sx={{ backgroundColor: "rgba(94, 94, 94, 0.5)" }}>
            <h2>CINES 4D</h2>El cine 4D es un sistema de proyección de películas que recrea en la sala de proyección las condiciones físicas que se ven en la pantalla, como niebla, lluvia, viento, sonidos más intensos u olores, así como vibraciones en los asientos y otros efectos, con el objetivo de generar una mayor inmersión del público con respecto a una sala tradicional.Las salas de cine en 4D pueden proyectar tanto en formato 3D como en formato 2D
          </Paper>
        </Grid>
      </Grid>
      </>

  );
  }