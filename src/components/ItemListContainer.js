import React from 'react'
import ItemCount from './ItemCount'
const ItemListContainer = (prop) =>{
    return(
        <>
        <h1>{prop.greeting}</h1>
        <ItemCount stock={5} initial={0} onAdd={(cant)=>{console.log(cant)}}/>
        </>
    )
}
export default ItemListContainer