import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ItemDetail = ({productos}) => {

    const[number, setNumber] = useState(0)

    const addToCart = (cantidad) =>{
        setNumber(cantidad);
    }

    console.log(number)

    return(
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">
                <img src={productos.imagen} alt={productos.nombre}/>
                <h2>{productos.nombre}</h2>
                <p>{productos.descripcion}</p>
                <p>{productos.precio}</p>
                {
                    number === 0 ? <ItemCount stock={5} addToCart={addToCart}/> : <Link to='/cart'>Ir al carrito</Link>
                }
            </Container>
        </React.Fragment>
    );
};

export default ItemDetail;