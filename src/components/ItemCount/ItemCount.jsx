import React, {useState} from 'react';
import Button from '@mui/material/Button';
import s from './itemCount.module.css'

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
        <>
            <div className={s.cardContainer} >
                <div className={s.buttonContainer}>
                    <Button size="small" className={s.buttonStyle} onClick={subs} variant="outlined" color="error">-</Button>
                    <p>{count}</p>
                    <Button size="small" className={s.buttonStyle}onClick={adding} variant="outlined" color="success">+</Button>
                </div>
                <Button size="big" onClick={onAdd} variant="contained" color="success" >Agregar al carro</Button>
            </div>
        </>
    )
}

export default ItemCount;