import React from 'react'
import logo from '../img/logo.png';
import CartWidget from "./CartWidget"
import {NavLink} from "react-router-dom"
const secciones = ["Novedades ","Hombre ","Mujer ","Contacto "]

const ListaDeSecciones = () => {

    return(
        <div className="secciones">
        {secciones.map((seccion) => (
            <a href="#">{seccion}</a>
        ))}
        </div>

    )
}
const NavBar = () => {
    return (
        <>
        <nav>
            <div className="inicio">
                 <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
            </div>
            <ListaDeSecciones/>
            <div className="burger">
                <div className="lin1"></div>
                <div className="lin2"></div>
                <div className="lin3"></div>
            </div>
            <div className="perfil">
                <NavLink to="/login">Ingresar</NavLink>
            </div>  
            <CartWidget/> 
        </nav>
        </>
    )
}

export default NavBar