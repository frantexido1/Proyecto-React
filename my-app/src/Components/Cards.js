import "./Cards.css";
import { ThemeProvider, Paper, Box, Grid, Typography, Stack, useTheme } from '@mui/material';
import ButtonModal from "./ButtonModal/ButtonModal";
import { ProductData } from "./Cart/ProductsData"
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { IconButton } from '@mui/material';
import { useContext } from "react";
import { CartContext } from "./Cart/CartContext";


const Cards = () => {
  const {addItemToCart} = useContext(CartContext);
  const theme = useTheme();
  return (
      <>
      {ProductData.map((product, i) => (
     <Grid zeroMinWidth item xs={3} key={i} >
       <ThemeProvider theme={theme}>
        <Paper elevation={5} square sx={{color:"text.secondary"}}>
           <img src={product.img} alt="Pelicula" className="img"/>
          <Box paddingX={1} >

            <Typography noWrap variant="h6" component="h2" textAlign="center" >
             {product.title}  
            </Typography>


            <Stack alignItems="center" paddingY={0.50}>
            <IconButton aria-label="ConfirmationNumberIcon" onClick={() => addItemToCart(product)}>
                <ConfirmationNumberIcon sx={{ color: '#FF7700' }}/>
            </IconButton> 
                  <ButtonModal/>
            </Stack>


             <Typography noWrap variant="body1" component="h2" textAlign={"center"} paddingY={0.50} >
             {product.category} 
             </Typography>

          </Box> 
        </Paper>
      </ThemeProvider>
     </Grid>
     ))}
     </>
     );

  };
  
  export default Cards;