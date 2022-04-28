import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'


function Item({id, imagen, nombre, precio}){

    return(
        <Card id={id}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="350"
                image={imagen}
                alt="producto"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        &#36;{precio}
                    </Typography>
                    <ItemCount stock={5} producto={{id, imagen, nombre, precio}}/>
                    <Button size="small" variant="text">
                        <Link to={`/item/${id}`} style={{textDecoration: 'none'}}>Ver Detalle</Link>
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Item;