import React,{useContext,useEffect} from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'
import cartContext from "../context/cartContext"
  
const CartWidget = () => {
    const {Cantidad,actualizarCantidad} = useContext(cartContext)
    useEffect(() => {
        actualizarCantidad()
    }, [Cantidad])
    return(
        
        <div className = "compras">
            {Cantidad? <><Link className="link" to="/Cart"><p className="icono"><FaShoppingCart/></p></Link>
            <span className="cantItems">{Cantidad}</span></>:null}
            
        </div>
    )
}

export default CartWidget