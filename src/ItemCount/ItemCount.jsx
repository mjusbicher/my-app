import React, {useState} from 'react';
import Button from '@mui/material/Button';
import s from './itemCount.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ItemCount({stock}){
    const [count, setCount] = useState(0);

    function adding(){
        if(count < stock){
        setCount(count + 1);}
    }
    function subs(){
        if(count > 0){
        setCount(count - 1);}
    }
    function onAdd(){
        alert('Agregaste ' + count + ' productos a tu carrito');
    }

    return(
        <Card sx={{ maxWidth: 345 }} className={s.cardStyle}>
            <CardMedia
            component="img"
            height="140"
            image="https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/6/36G040-E8G_0.jpg"
            alt="buzo"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Producto 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
            Precio: $3000.00
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={subs} variant="outlined" color="success">-</Button>
                <p>{count}</p>
                <Button size="small" onClick={adding} variant="outlined" color="success">+</Button>
                <Button size="big" onClick={onAdd} variant="contained" color="success" >Agregar al carro</Button>
            </CardActions>
        </Card>
    )
}

export default ItemCount;