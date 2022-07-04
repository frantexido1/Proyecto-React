import "./Cards.css";
import { ThemeProvider, Paper, Box, Grid, Typography, Stack, useTheme, IconButton } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { actionTypes } from "../../Hooks/CartReducer";
import { useCartValue } from "../../Context/CartProvider";


const Cards = ({ title, img, id, category, price }) => {

  const theme = useTheme();

  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useCartValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        title,
        category,
        price,
        img
      }
    })
  }

  return (

    <Grid zeroMinWidth item xs={12} sm={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={5} square sx={{ color: "text.secondary" }}>
          <img src={img} alt="Pelicula" className="img" />
          <Box paddingX={1} >

            <Typography noWrap variant="h6" component="h2" textAlign="center" >
              {title}
            </Typography>


            <Stack alignItems="center" paddingY={0.50}>
              <IconButton aria-label="" color="secondary" onClick={addToBasket}>
                <ShoppingBagIcon />
              </IconButton>
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