import React,{useState} from 'react'
import logo from '../img/logo.png';
import CartWidget from "./CartWidget"
import {Link, NavLink} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
const secciones = [{nombre:"Novedades",id:"N"},{nombre:"Hombre",id:"H"},{nombre:"Mujer ",id:"M"},{nombre:"Contacto ",id:"C"}]


const NavBar = () => {
    const [abierto, setAbierto] = useState(false)
    return (
        <>
        <nav>
            <div className="inicio">
                 <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
            </div>
            <div className={abierto ? "secciones nav-active":"secciones"}>
            {secciones.map((seccion) => (
                <Link onClick={()=>{setAbierto(!abierto)}} to={`/category/${seccion.id}`}><a>{seccion.nombre}</a></Link>
            ))}
            </div>
            <div className="burger" onClick={()=>{setAbierto(!abierto)}}>
                {abierto ? <AiOutlineClose/> : <FaBars/>}
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