import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import {  Container, createTheme, ThemeProvider } from '@mui/material';
import { CartContext } from '../../Context/CartContext';

const theme = createTheme ({
    components: {
        MuiContainer: {
            variants: [
                {
                    props: {
                        variant: "cartItem"
                    },
                    style: {
                        height: "80px",
                        backgroundColor: "#3a3a3a",
                        marginTop: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 15px",
                    }                   
                },
                {
                    props: {
                        variant: "dataContainer"
                    },
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        height: "100%",
                        padding: "15px 0",
                    }                   
                },
                {
                    props: {
                        variant: "left"
                    },
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        paddingLeft: "20px",
                    }                   
                },
                {
                    props: {
                        variant: "right"
                    },
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        padding: "0 15px",
                    }                   
                }
            ]
        }
    }
})

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext (CartContext);

  return (
    <ThemeProvider theme={theme}>
    <Container variant="cartItem">
        <img height="65px" src={item.img} alt={item.title}/>
        <Container variant="dataContainer">
            <Container variant="left">
                <p>{item.title}</p>
                <Container variant="">
                    <Button variant="contained" onClick={() => addItemToCart(item)}>AGREGAR</Button>
                    <Button variant="contained" onClick={() => deleteItemToCart(item)}>QUITAR</Button>
                </Container>
            </Container>
            <Container variant="right">
            <Container>
            {item.amount}
            <p>Total: ${item.amount * item.price}</p>
        </Container>
    </Container>
    </Container>
    </Container>
    </ThemeProvider>   
  )
}

export default ItemCart
