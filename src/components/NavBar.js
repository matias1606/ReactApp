import React from 'react'
import logo from '../logo.png';
import lupita from '../icono.png'
import carrito from "../carrito.png"
import flechita from "../flechita.png"
const NavBar = () => {
    return (
        <nav>
            <a href="#"><img src={logo} alt="logo" /></a>
            <div className="busqueda">
                <a href="#buscar"><img src={lupita} id="lupa" alt=""/></a>
                <input id="buscar" placeholder="buscar..." type="text"/>
            </div>
            <div className = "compras">
                <a href="#"><img id="carrito" src={carrito} alt=""/></a>
                <h4> Carrito: <span>0</span></h4>
            </div>
            <div className="perfil">
                <div className="foto">
                    <p>TW</p>
                </div>
                <h4>
                    Bienvenido
                </h4>
                <a href="#"><img src={flechita} className="flechita" alt=""/></a>
            </div>
           
           
        </nav>
    )
}

export default NavBar