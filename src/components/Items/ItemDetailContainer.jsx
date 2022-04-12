import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { traerProducto } from '../../utils/productos';

const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState({})

    useEffect(() => {
        traerProducto()
        .then((res) => setProducto(res))
        .catch((error) => console.log(error));
    }, []);

    return(
        <>
            <ItemDetail producto={producto}/>
        </>
    );
};

export default ItemDetailContainer;