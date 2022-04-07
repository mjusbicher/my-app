import React, { useEffect, useState } from "react";
import promesaCustom from "../utils/promesas";
import productos from "../utils/productos";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css"

function ItemListContainer(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        promesaCustom(2000, productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items])

    return(
        <div className={styles.container}>
            <ItemList productos={items}/>
        </div>
    );
}

export default ItemListContainer;