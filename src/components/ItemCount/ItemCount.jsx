import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import s from './itemCount.module.css'
import { CartContext } from '../../Context/CartContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        neutral: {
        main: '#111',
        contrastText: '#fff',
        },
    },
});

function ItemCount({stock, producto}){
    const [count, setCount] = useState(0);

    const { addItem,cart } = useContext(CartContext);

    const adding = () =>{
        if(count < stock){
        setCount(count + 1);}
    }
    const subs = () =>{
        if(count > 0){
        setCount(count - 1);}
    }
    const handleClick = () => {
        if (count !== 0){
            addItem({...producto, count});
            setCount(0);
            console.log(cart)
        }
    }


    return(
        <>
            <div className={s.cardContainer} >
                <div className={s.buttonContainer}>
                    <Button size="small" className={s.buttonStyle} onClick={subs} variant="contained" color="error">-</Button>
                    <p>{count}</p>
                    <Button size="small" className={s.buttonStyle} onClick={adding} variant="contained" color="success">+</Button>
                </div>
                <ThemeProvider theme={theme}>
                    <Button size="big" onClick={handleClick} variant="contained" color="neutral" >Agregar al carro</Button>
                </ThemeProvider>
            </div>
        </>
    )
}

export default ItemCount;