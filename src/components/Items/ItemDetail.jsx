import React from 'react'
import styles from './ItemDetail.module.css'

const ItemDetail = ({producto}) =>{
    return(
        <div className={styles.containerDetail}>
            <img src={producto.imagen} alt={producto.nombre}/>
            <h2>{producto.nombre}</h2>
        </div>
    );
};

export default ItemDetail;