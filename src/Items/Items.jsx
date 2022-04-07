import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";


function Item({id, nombre, precio, imagen}){
    return(
        <Card key={id} sx={{maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image={imagen}
                alt="producto"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {precio}
                    </Typography>
                    <ItemCount stock={5}/>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Item;