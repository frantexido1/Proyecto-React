import {Grid,Box} from '@mui/material/';


export default function Cines4d() {
    return (
      <>
        <Box  sx={{
            margin: "0",
            padding: "15px",
            alignItems:"center",
            borderRadius:"10px",
            boxShadow:"10px",
            backgroundColor:"#251F1F",
            textAlign:"center"
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Box  sx={{ backgroundColor: "rgba(94, 94, 94, 0.5)",padding:"10px"}}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Diagrama_de_teatro_4D.jpg/330px-Diagrama_de_teatro_4D.jpg' alt='' minWidth="100%" maxHeight="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ color:"rgb(255,255,255)",fontSize:"auto", textAlign:"center",minWidth:"100%", maxHeight:"100%"}}>
              <h1>CINES 4D</h1>
              <p>
                El cine 4D es un sistema de proyección de películas que recrea en la sala de proyección las condiciones físicas que se ven en la pantalla, como niebla, lluvia, viento, sonidos más intensos u olores, así como vibraciones en los asientos y otros efectos, con el objetivo de generar una mayor inmersión del público con respecto a una sala tradicional.Las salas de cine en 4D pueden proyectar tanto en formato 3D como en formato 2D
              </p>
              </Box>
            </Grid>
        </Grid> 
        </Box>
        
      </>
      
  );
  }