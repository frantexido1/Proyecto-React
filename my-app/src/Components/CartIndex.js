import React, { createContext, useContext, useEffect, useState }  from 'react';
import { CartContext } from './CartContext';
import IconButton from '@mui/material/IconButton'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import "./Cards.css";
import ItemCart from './ItemCart';

// export const Cart = createContext()

const CartIndex = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [peliculasLength, setPeliculasLength] = useState(0);

    const { cartItems } = useContext(CartContext);

    useEffect(() => {
       setPeliculasLength(
           cartItems.reduce((previous,current) => previous + current.amount , 0)
       );
    }, [cartItems]);

    const total = cartItems.reduce(
        (previous,current) => previous + current.amount * current.price, 0);

  return (
    <>
    <div onClick={() => {setCartOpen(!cartOpen)}}>
        {!cartOpen ? (
      <IconButton aria-label="buy" color='secondary' href='#' paddingX={3}>
          <ShoppingCartOutlinedIcon sx={{ fontSize: 25,color: '#FF7700' }}/>
      </IconButton>              
       ) : ( 
      <IconButton aria-label="buy" color='secondary' href='#' paddingX={3}>
        <CancelIcon sx={{ fontSize: 25,color: '#FF7700' }}/>
      </IconButton>     
       )}

        {!cartOpen && <div className="PeliculasNumber">{peliculasLength}</div>}
        </div>
        {cartItems && cartOpen && (
        <div>
        <h2>Tu carrito</h2>
        {cartItems.length === 0 ? <p>Tu carrito esta vacio</p> : (
          <div>{cartItems.map((item, i) => (
            <ItemCart key={i} item={item}/>
          ))}</div>
        )}

        <h2>Total: ${total}</h2>
        </div>

        )}

      </>


//     <Cart.Provider value={{ CartIndex }}>
//     {children}
// </Cart.Provider>
  );
};

export default CartIndex
