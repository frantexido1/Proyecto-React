// import React, { useState } from 'react';
// import { useTheme } from '@mui/material/';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "./Carrusel.css";
// import {datosCarrusel} from '../Components/Data.js';
import "./Cards.css";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Stack from '@mui/material/Stack';
import {  createTheme, ThemeProvider } from '@mui/material';


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

export const Carrusel = ({funcion}) => {
      const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  

    return (
      <div classname="carrusel">
        <Slider {...settings}>

          <div>
          <Grid item xs={3}>

              
           <ThemeProvider theme={theme}>
            <Paper elevation={3} square >
            <img src={funcion.img} alt="Scream" className="img"/>
            <Box paddingX={1}>

            <Typography variant="h6" component="h2" textAlign={"center"} >
             {funcion.title} 
            </Typography>


            <Stack alignItems="center" paddingY={1}>
                  <IconButton aria-label="ConfirmationNumberIcon">
                     <ConfirmationNumberIcon sx={{ color: '#251F1F' }} />
                   </IconButton>  
            </Stack>


            <Typography variant="body1" component="h2" textAlign={"center"} paddingY={1} >
            {funcion.category} 
            </Typography>

          </Box> 
        </Paper>
      </ThemeProvider>

     </Grid>
     </div>
        </Slider>
        </div>

   );
}



        /* /* {datosCarrusel.map((item) => (
        <div classname="card">
          <div classname="card-top">
            <img src={item.linkImg} alt={item.title}/>
            <h1>{item.title}</h1>
          </div>
          <div classname="card-bottom">
            <h3>{item.price}</h3>
            <span className="category">{item.category}</span>
          </div>
        </div>
        ))} */
