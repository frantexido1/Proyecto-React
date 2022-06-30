import React, { createContext, useState } from 'react'


export default function CartContext({ children }) {

    const CartContext=createContext();
    const [fecha, setfecha] = useState([])

    const valorfecha= (valor) =>{
      setfecha(valor)
    }


  return (
    <CartContext.Provider>
        { children }
    </CartContext.Provider>
  )
    
}
