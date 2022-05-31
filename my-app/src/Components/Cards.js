import "./Cards.css";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material';


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

  return (

      
     <Grid item xs={3}>
       <ThemeProvider theme={theme}>
        <Paper elevation={3} square >
           <img src={funcion.img} alt="Scream" className="img"/>
          <Box paddingX={1}>

            <Typography variant="h6" component="h2" textAlign={"center"}>
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
     );

  };
  
  export default Cards