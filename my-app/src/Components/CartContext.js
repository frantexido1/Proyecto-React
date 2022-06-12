import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() =>{
        try {
            const peliculasEnLocalStorage = localStorage.getItem("cartPeliculas")
            return peliculasEnLocalStorage ? JSON.parse(peliculasEnLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });
    
    useEffect(() => {
       localStorage.setItem("cartPeliculas", JSON.stringify(cartItems));
       console.log(cartItems)
    }, [cartItems]);

    const addItemToCart = (pelicula) => {
        const inCart = cartItems.find(
            (peliculaInCart) => peliculaInCart.id === pelicula.id
        );

        if(inCart){
            setCartItems(
                cartItems.map((peliculaInCart) => {
                    if(peliculaInCart.id === pelicula.id) {
                        return {...inCart, amount: inCart.amount + 1}
                    } else return peliculaInCart
                })
            );
        } else {
            setCartItems([...cartItems, {...pelicula, amount: 1}]);
        }}

        const deleteItemToCart = (pelicula) => {
            const inCart = cartItems.find(
                (peliculaInCart) => peliculaInCart.id === pelicula.id
            );



            if(inCart.amount === 1) {
               setCartItems(
                   cartItems.filter(peliculaInCart => peliculaInCart.id !== pelicula.id)
               );
            } else {
                setCartItems((peliculaInCart) => {
                    if(peliculaInCart.id === pelicula.id) {
                    return {...inCart, amount: inCart.amount - 1}
                } else return peliculaInCart
                })
            }
        };

        return (
            <CartContext.Provider value={{cartItems, addItemToCart, deleteItemToCart}}>
                {children}
            </CartContext.Provider>
        )
    };
