import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css"
import { getFirestore, getDocs, query, collection, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom'

function ItemListContainer(){
    const [productos, setProductos] = useState([]);

    const { category } = useParams() 

    useEffect(() => {
        const db = getFirestore();
        
        let productosRef;

        if (!category){
            productosRef = collection(db, 'productos');
        } else {
            productosRef = query(collection(db, 'productos'), where('category', '==', category))
        }
        getDocs(productosRef).then((res) =>{
            setProductos(res.docs.map((item) => ({ id: item.id, ...item.data()})));
        });
    }, [category]);

    return(
        <div className={styles.container}>
            <ItemList productos={productos}/>
        </div>
    );
}

export default ItemListContainer;