import React, { createContext } from 'react'


export default function CartProvider({ children }) {

    const CartContext=createContext();
    

  return (
    <CartContext.Provider>
        { children }
    </CartContext.Provider>
  )
    
}
