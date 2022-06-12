import "./Cards.css";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { createTheme, ThemeProvider, Paper, Box, Grid, Typography, IconButton, Stack } from '@mui/material';
import { useContext } from "react";
import { CartContext } from "./CartContext";


const theme = createTheme({
 components: {
   MuiTypography: {
     variants: [
       {
        props: {
         variant: "h6"
       },
       style: { 
        
       },
      },
      {
       props: {
         variant: "body1"
        
       },
       style: { 
         
       },
      },
    ],
   },
  },
});



const Cards = ({funcion}) => {

  const {addItemToCart} = useContext(CartContext)

  return (
      
     <Grid zeroMinWidth item xs={3}>
       <ThemeProvider theme={theme}>
        <Paper elevation={3} square >
           <img src={funcion.img} alt="Pelicula" className="img"/>
          <Box paddingX={1}>

            <Typography noWrap variant="h6" component="h2" textAlign={"center"} >
             {funcion.title}  
            </Typography>


            <Stack alignItems="center" paddingY={0.50}>
                  <IconButton aria-label="ConfirmationNumberIcon" onClick={() => addItemToCart(funcion)}>
                     <ConfirmationNumberIcon sx={{ color: '#FF7700' }} />
                   </IconButton>  
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