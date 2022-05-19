import React, { useContext } from "react";
import Button from '@mui/material/Button';
import { CartContext } from "../../Context/CartContext";
import styles from "./Cart.module.css"
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from "@material-ui/core";

const theme = createTheme({
  palette: {
      neutral: {
      main: '#111',
      contrastText: '#fff',
      },
    },
});

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext);


  return (
    <>
        <div className={styles.header}>
          <h2 className={styles.heading}>Lista de Productos: {cart.length}</h2>
          <h5 className={styles.action} onClick={() => clear()}>LIMPIAR CARRITO </h5>
        </div>
      <div>{cart.length === 0 && <div>
        <h2 className={styles.texts}>EL CARRITO ESTÁ VACÍO</h2>
        <Box textAlign='center'>
          <Button className={styles.btn} component={Link} to= "/" variant="contained">Volver a la página principal</Button>
        </Box>
      </div>}</div>
      {cart.length > 0 &&
        cart.map((p) => (
          <div className={styles.items}>
            <div className={styles.image}>
              <img style={{ height: '120px' }} src={p.imagen} alt={p.nombre} />
            </div>
            <div className={styles.about}>
              <h1 className={styles.nombre}>{p.nombre}</h1>
              <p>Precio: &#36;{p.precio}</p>
              <div className={styles.counter}>
              {
                        p.count > 5 ? <div className={styles.stockLimit}>NO HAY STOCK (MAX 5)</div> : <div className={styles.count}>Cantidad: {p.count}</div> 
              }
              </div>
            </div>
            <Button onClick={() => removeItem(p.id)}>REMOVER</Button>
          </div>
        ))}
        <h2 className={styles.texts}>VALOR TOTAL: &#36;{totalPrice}</h2>
          <ThemeProvider theme={theme}>
            {
              cart.length === 0 ? 
              <Box textAlign='center'>
                <Button className={styles.btn} variant="contained" color="neutral" disabled>FINALIZAR COMPRA</Button>
              </Box> 
              : 
              <Box textAlign='center'>
                <Button className={styles.btn} component={Link} to="/checkout" variant="contained" color="neutral">FINALIZAR COMPRA</Button>
              </Box>
            }
          </ThemeProvider>
    </>
  );
};

export default Cart;
