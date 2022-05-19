import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';



const ItemDetail = ({productos}) => {

    const[number, setNumber] = useState(0)

    const addToCart = (cantidad) =>{
        setNumber(cantidad);
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <CssBaseline/>
            <Card style={{ margin: '25px'}} maxWidth="auto">
                <CardActionArea>
                    <CardMedia component="img"
                    height="auto"
                    image={productos.imagen}
                    alt={productos.nombre}/>
                    <Typography variant="h5">{productos.nombre}</Typography>
                    <Typography variant="subtitle1">{productos.descripcion}</Typography>
                    <Typography variant="h6" color="text.secondary">&#36;{productos.precio}</Typography>
                    {
                        number === 0 ? <ItemCount stock={5} addToCart={addToCart} producto={productos}/> : <Link to='/cart'>Ir al carrito</Link>
                    }
                </CardActionArea>
            </Card>
        </div>
    );
};

export default ItemDetail;