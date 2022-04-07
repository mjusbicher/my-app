import React from "react";
import Item from "./Items";

function ItemList({productos}) {
    return(
        productos.map(p =>(
            <Item
            key={p.id}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}/>
        ))
    )
}

export default ItemList;