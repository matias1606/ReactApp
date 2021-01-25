import React, { useEffect, useContext, useState } from "react"
import cartContext from "../context/cartContext"
import { Link, NavLink } from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
const Cart = () => {
    const { lista, Total, actualizarTotal,removeItem,actualizarCantidad} = useContext(cartContext)
    useEffect(() => {
        actualizarTotal()
        actualizarCantidad()
    }, [lista])
    return (
        <div className={lista.length == 0? "": "container-carrito"}>
            {lista.length == 0 ? <>
                <h3>No hay items aún</h3>
                <NavLink to="/">Regresar</NavLink>
            </>
                                :
            <>
                {lista.map((elemento) => {
                    return (
                        <>
                            <div className="item">
                                <img src={elemento.item.pictureUrl}></img>
                                <div className="info-carrito">
                                    <h2>{elemento.item.title}</h2>
                                    <p>precio x unidad: ${elemento.item.price}</p>
                                    <p className="cant">Cantidad : {elemento.quantity}</p>
                                    <p className="subTot">SubTotal: $ {elemento.item.price * elemento.quantity}</p>
                                {/* <p>{elemento.quantity}</p>
                                <h1>{elemento.item.id}</h1>

                                <button>remover</button> */}
                                </div>
                                <h2 onClick={()=>{removeItem(elemento)}} className="boton-cerrar"><AiOutlineClose></AiOutlineClose></h2>
                                
                            </div>
                        </>
                    )
                })}
                <h2 className="tot">Total: ${Total}</h2>
            </>}

        </div>
    )
}

export default Cart
