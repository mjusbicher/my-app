import React, { useEffect, useState } from "react";
import { traerProductos } from "../../utils/productos";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css"

function ItemListContainer(){
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        traerProductos()
        .then((res) => setProductos(res))
        .catch((error) => console.log(error));
    }, []);

    return(
        <div className={styles.container}>
            <ItemList productos={productos}/>
        </div>
    );
}

export default ItemListContainer;