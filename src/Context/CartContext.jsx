import React, { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let total = 0;
    cart.map(item =>  
      total += item.count * item.precio
    )
    setTotalPrice(total);
  }, [cart])
  

  const addItem = (item) => {
    const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexItem !== -1) {
      const newCart = [...cart];
      newCart[indexItem].count = newCart[indexItem].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clear = () => setCart([]);

  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalPrice}}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
