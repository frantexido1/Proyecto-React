import "./Cards.css";
import {  ThemeProvider, Paper, Box, Grid, Typography, Stack,useTheme } from '@mui/material';
import ButtonModal from "../ButtonModal/ButtonModal";
import { useEffect } from "react";




const Cards = (title,img,id,category) => {


  const theme = useTheme();
  return (
      
     <Grid zeroMinWidth item xs={12} sm={3}>
       <ThemeProvider theme={theme}>
        <Paper elevation={5} square sx={{color:"text.secondary"}}>
           <img src={img} alt="Pelicula" className="img"/>
          <Box paddingX={1} >

            <Typography noWrap variant="h6" component="h2" textAlign="center" >
             {title}  
            </Typography>


            <Stack alignItems="center" paddingY={0.50}>
                  <ButtonModal  title={title} img={img} id={id}/>
            </Stack>


             <Typography noWrap variant="body1" component="h2" textAlign={"center"} paddingY={0.50} >
             {category} 
             </Typography>

          </Box> 
        </Paper>
      </ThemeProvider>
     </Grid>
     );

  };
  
  export default Cards;