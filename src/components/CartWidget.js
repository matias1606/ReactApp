import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
  
const CartWidget = () => {
    return(
        <div className = "compras">
            <a href="#"><p className="icono"><FaShoppingCart/></p></a>
            <h4> Carrito: <span>0</span></h4>
        </div>
    )
}

export default CartWidget