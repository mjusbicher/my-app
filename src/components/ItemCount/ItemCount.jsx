import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import s from './itemCount.module.css'
import { CartContext } from '../../Context/CartContext';

function ItemCount({stock, producto}){
    const [count, setCount] = useState(0);

    const { addItem } = useContext(CartContext);

    const adding = () =>{
        if(count < stock){
        setCount(count + 1);}
    }
    const subs = () =>{
        if(count > 0){
        setCount(count - 1);}
    }
    const handleClick = () => {
        console.log(count)
        if (count !== 0){
            addItem({...producto, count})
        }
    }


    return(
        <>
            <div className={s.cardContainer} >
                <div className={s.buttonContainer}>
                    <Button size="small" className={s.buttonStyle} onClick={subs} variant="outlined" color="error">-</Button>
                    <p>{count}</p>
                    <Button size="small" className={s.buttonStyle}onClick={adding} variant="outlined" color="success">+</Button>
                </div>
                <Button size="big" onClick={handleClick} variant="contained" color="success" >Agregar al carro</Button>
            </div>
        </>
    )
}

export default ItemCount;