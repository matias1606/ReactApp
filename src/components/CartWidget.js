import React,{useContext,useEffect} from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'
import cartContext from "../context/cartContext"
  
const CartWidget = () => {
    const {Cantidad,actualizarCantidad,lista} = useContext(cartContext)
    console.log(lista)
    return(
        <div className = "compras">
            {Cantidad != 0? <><Link className="link" to="/Cart"><p className="icono"><FaShoppingCart/></p></Link>
            <span className="cantItems">{actualizarCantidad()}</span></>:null}
            
        </div>
    )
}

export default CartWidget