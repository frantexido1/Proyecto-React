import {createContext, useState} from 'react'

export const CarritoContext = createContext()


const CarritoContextProvider = (props) => {
    
const [carrito, setCarrito] = useState([])

return (
    <CarritoContext.Provider value={carrito}>
        {props.children}
    </CarritoContext.Provider>
    )
}
export default CarritoContextProvider;
