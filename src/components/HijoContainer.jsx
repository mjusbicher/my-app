import React from "react";
import { useState } from "react";

export default function HijoContainer({arrayDeProductos}){
    const [x, setX] = useState(0);
    const [fecha, setFecha] = useState(new Date());

    function contador(){
        setX(x + 1)
        setFecha(new Date())
    }

    return(
        <>
            <div>{arrayDeProductos.map(item => <p>{item}</p>)}</div>
            <button onClick={() => contador()}>Borrar un producto</button>
            <br />
            Cantidad de clicks: {x}
            <br />
            Fecha actual: {fecha.toLocaleTimeString()}
        </>
    );
}