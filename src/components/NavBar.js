import React from 'react'
import logo from '../img/logo.png';
import lupita from '../img/icono.png'
import flechita from "../img/flechita.png"
import CartWidget from "./CartWidget"
const NavBar = () => {
    return (
        <nav>
            <a href="#"><img src={logo} alt="logo" /></a>
            <div className="busqueda">
                <a href="#buscar"><img src={lupita} id="lupa" alt=""/></a>
                <input id="buscar" placeholder="buscar..." type="text"/>
            </div>
            <CartWidget/>
            <div className="perfil">
                <div className="foto">
                    <p>MD</p>
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