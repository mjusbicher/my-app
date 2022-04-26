import Button from '@mui/material/Button';
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./Cart.module.css"
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  const totalValue = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.totalPrice,
    0
);
  console.log(totalValue)

  return (
    <>
        <div className={styles.header}>
          <h2 className={styles.heading}>Lista de Productos: {cart.length}</h2>
          <h5 className={styles.action} onClick={() => clear()}>Limpiar Carrito</h5>
        </div>
      <div>{cart.length === 0 && <div>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver a la página principal</Link>
      </div>}</div>
      {cart.length > 0 &&
        cart.map((p) => (
          <div className={styles.items}>
            <div className={styles.image}>
              <img style={{ height: '120px' }} src={p.imagen} alt={p.nombre} />
            </div>
            <div className={styles.about}>
              <h1 className={styles.nombre}>{p.nombre}</h1>
              <h3 className={styles.descripcion}>{p.descripcion}</h3>
              <p>&#36;{p.precio}</p>
              <div className={styles.counter}>
                <Button size="small" variant="contained" color="error" className={styles.btn}>-</Button>
                <div className={styles.count}>{p.count}</div>
                <Button size="small" variant="contained" color="success" className={styles.btn}>+</Button>
              </div>
            </div>
            <Button onClick={() => removeItem(p.id)}>Remover</Button>
          </div>
        ))}
        <h2>Valor total: ${totalValue}</h2>
    </>
  );
};

export default Cart;
