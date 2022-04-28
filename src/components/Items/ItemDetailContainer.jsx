import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getFirestore, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({});
    
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const productoRef = doc(db, 'productos', id);
        getDoc(productoRef).then((res) => {
            setProducto({id: res.id, ...res.data()});
        });
    }, [id]);

    return(
        <>
            <ItemDetail productos={producto}/>
        </>
    );
};

export default ItemDetailContainer;