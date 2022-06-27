import { useState, useContext, useEffect } from 'react'
import { CartContext } from './CartContext';
import IconButton from '@mui/material/IconButton'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Typography} from '@mui/material/';
import ItemCart from './ItemCart';


const style = {
    height: "20px",
    width:"20px",
    borderRadius: "999px",
    position: "absolute",
    top: "0",
    right: "0",
    backgroundColor: "red",
    fontSize: "12px",
    fontWeight: "bold",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  };

const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);

    const {cartItems} = useContext (CartContext);

useEffect(() => {
    setProductsLength(
    cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
    }, [cartItems]);

    const total = cartItems.reduce(
      (previous, current) => previous + current.amount * current.price, 0
    );


    return (
      <div>
      <div onClick={() =>  {setCartOpen(!cartOpen)}}>
      <div>
        {!cartOpen ? (

      <IconButton aria-label="buy" color='secondary' href='#' >
       <ShoppingCartOutlinedIcon  sx={{ fontSize: 25,color: '#FF7700' }}/>
      </IconButton>

        ) : (

      <IconButton aria-label="buy" color='secondary' href='#' >
       <HighlightOffIcon  sx={{ fontSize: 25,color: '#FF7700' }}/>
      </IconButton>

      )}
      </div>
      {!cartOpen && (
      <Typography sx={style}>{productsLength}</Typography>
      )}
      </div>
      
      {cartItems && cartOpen && (
        <div>
          <h2>Tu carrito</h2>
          {cartItems.length === 0 ? (
          <p>Tu carrito esta vacio</p>
          ) : (
            <div>
              {cartItems.map((item, i) => (
              <ItemCart key={i} item={item}/>
            ))}
            </div>
          )}

          <h2>Total: ${total}</h2>
        </div>
      )}
      </div>
  );
};

export default Cart