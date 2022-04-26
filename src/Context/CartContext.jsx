import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexItem !== -1) {
      const newCart = [...cart];
      newCart[indexItem].count = newCart[indexItem].count + item.count;
      newCart[indexItem]['totalPrice'] = newCart[indexItem].count * item.precio;
      setCart(newCart);
    } else {
      item['totalPrice'] = item.count * item.precio;
      setCart([...cart, item]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clear = () => setCart([]);

  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
