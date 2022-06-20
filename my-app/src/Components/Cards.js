import "./Cards.css";
<<<<<<< HEAD
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { createTheme, ThemeProvider, Paper, Box, Grid, Typography, IconButton, Stack } from '@mui/material';
=======
import {  ThemeProvider, Paper, Box, Grid, Typography, Stack,useTheme } from '@mui/material';
import ButtonModal from "./ButtonModal/ButtonModal";
>>>>>>> be9a8e72a25ce9c0bf76cd5fcd9d1677d59d9880




const Cards = ({funcion}) => {

<<<<<<< HEAD
=======
  const theme = useTheme();
>>>>>>> be9a8e72a25ce9c0bf76cd5fcd9d1677d59d9880
  return (
      
     <Grid zeroMinWidth item xs={3} >
       <ThemeProvider theme={theme}>
        <Paper elevation={5} square sx={{color:"text.secondary"}}>
           <img src={funcion.img} alt="Pelicula" className="img"/>
          <Box paddingX={1} >

            <Typography noWrap variant="h6" component="h2" textAlign="center" >
             {funcion.title}  
            </Typography>


            <Stack alignItems="center" paddingY={0.50}>
<<<<<<< HEAD
                  <IconButton aria-label="ConfirmationNumberIcon">
                     <ConfirmationNumberIcon sx={{ color: '#FF7700' }} />
                   </IconButton>  
=======
                  <ButtonModal/>
>>>>>>> be9a8e72a25ce9c0bf76cd5fcd9d1677d59d9880
            </Stack>


             <Typography noWrap variant="body1" component="h2" textAlign={"center"} paddingY={0.50} >
             {funcion.category} 
             </Typography>

          </Box> 
        </Paper>
      </ThemeProvider>
     </Grid>
     );

  };
  
  export default Cards;