import React from 'react'
import styles from './ItemDetail.module.css'
import Button from '@mui/material/Button';


const ItemDetail = ({producto}) => {
    return(
        <div className={styles.containerDetail}>
            <img src={producto.imagen} alt={producto.nombre}/>
            <div className={styles.containerDetailText}>
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                <Button variant="outlined">COMPRAR</Button>
            </div>
        </div>
    );
};

export default ItemDetail;