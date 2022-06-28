import { useState, useContext, useEffect } from 'react'
import ItemCart from './ItemCart';
import { CartContext } from '../../Context/CartContext';


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
        
  );
};

export default Cart