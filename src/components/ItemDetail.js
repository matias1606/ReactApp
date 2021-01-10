import React from "react"

const ItemDetail = ({item}) =>{
    /* console.log(item) */
    return (
            <>
                <div className="detalles">
                    <img src={item.pictureUrl} alt=""/>
                    <p className="detalle">{item.price}</p>
                    <p className="detalle">{item.descripcion}</p>
                </div>
            </>
    )
}

export default ItemDetail