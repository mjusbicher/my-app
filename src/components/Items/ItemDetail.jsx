import React from 'react'
import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({producto}) => {
    return(
        <div className={styles.containerDetail}>
            <img src={producto.imagen} alt={producto.nombre}/>
            <div className={styles.containerDetailText}>
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                <ItemCount stock={5}/>
            </div>
        </div>
    );
};

export default ItemDetail;