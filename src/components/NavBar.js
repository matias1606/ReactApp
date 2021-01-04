import React from 'react'
import logo from '../img/logo.png';
import flechita from "../img/flechita.png"
import CartWidget from "./CartWidget"
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
                 <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <ListaDeSecciones/>
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
        </>
    )
}

export default NavBar