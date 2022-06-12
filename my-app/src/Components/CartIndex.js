import React, { useContext, useEffect, useState }  from 'react';
import { CartContext } from './CartContext';


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
    <div>
      
    </div>
  )
}

export default CartIndex
