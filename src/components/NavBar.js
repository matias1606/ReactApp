import React from 'react'
import logo from '../img/logo.png';
import CartWidget from "./CartWidget"
import {Link, NavLink} from "react-router-dom"
const secciones = [{nombre:"Novedades",id:"N"},{nombre:"Hombre",id:"H"},{nombre:"Mujer ",id:"M"},{nombre:"Contacto ",id:"C"}]

const ListaDeSecciones = () => {

    return(
        <div className="secciones">
        {secciones.map((seccion) => (
            <Link to={`/category/${seccion.id}`}><a>{seccion.nombre}</a></Link>
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