import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { traerProducto } from '../../utils/productos';

const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        traerProducto()
        .then((res) => setProducto(res))
        .catch((error) => console.log(error));
    }, []);

    return(
        <>
            {producto.map(p => <ItemDetail producto={p}/>)}
        </>
    );
};

export default ItemDetailContainer;