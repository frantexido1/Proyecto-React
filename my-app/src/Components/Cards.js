import "./Cards.css";
import {  ThemeProvider, Paper, Box, Grid, Typography, Stack,useTheme } from '@mui/material';
import ButtonModal from "./ButtonModal/ButtonModal";




const Cards = ({funcion}) => {

  const theme = useTheme();
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
                  <ButtonModal  title={funcion.title} img={funcion.img} id={funcion.id}/>
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