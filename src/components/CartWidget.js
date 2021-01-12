import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'
  
const CartWidget = () => {
    return(
        <div className = "compras">
            <Link className="link" to="/carrito"><p className="icono"><FaShoppingCart/></p></Link>
        </div>
    )
}

export default CartWidget