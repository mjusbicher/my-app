import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { traerProductos } from "../../utils/productos";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css"

function ItemListContainer(){
    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        traerProductos(categoryId)
            .then((res) => setProductos(res))
            .catch((error) => console.log(error));
    }, [categoryId]);

    return(
        <div className={styles.container}>
            <ItemList productos={productos}/>
        </div>
    );
}

export default ItemListContainer;