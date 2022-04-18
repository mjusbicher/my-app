import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { traerProducto } from '../../utils/productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        traerProducto(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error));
    }, [id]);

    return(
        <>
            <ItemDetail productos={producto}/>
        </>
    );
};

export default ItemDetailContainer;