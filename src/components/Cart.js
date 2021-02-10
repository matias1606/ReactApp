import React, { useContext, useState } from "react"
import cartContext from "../context/cartContext"
import { NavLink } from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
import {firestore} from "../firebaseConfig"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import firebase from "firebase"
import formContext from "../context/formContext"
const Error = ({mensaje})=>{
    return(
        <>
        <small>{mensaje}</small>
        </>
    )
}
const Cart = () => {
    const { lista, actualizarTotal,removeItem,limpiarCarrito} = useContext(cartContext);
    const {esTelefono,esEmail,hayBlancos,coincidenEmails} = useContext(formContext)
    const [telefono, setTelefono] = useState("")
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [email,setEmail] = useState("")
    const [email2,setEmail2] = useState("")
    const [subido,setSubido] = useState(0);
    const [id, setId] = useState("")
    const EstaVacio = (param) => {
       let valor = subido == 0 ? "form-control" : (subido > 0 && param != "") ? "form-control success" : "form-control error"
       if(subido == 0){
           return valor
       }
       if(param == email){
            if(!esEmail(email)){
                valor = "form-control error"
                return valor
            }
            else{
                return "form-control success"
            }
       }
       else if(param == telefono){
           if(!esTelefono(telefono)){
               valor = "form-control error"
               return valor
           }
           else{
               return "form-control success"
           }
       }
       else if(param == email2){
           if(email2 != email){
               valor = "form-control error"
               return valor
           }
           else{
               return valor
           }
       }
       else{
           return valor
       }
    }
    const chequearDatos = ()=>{
        if(!hayBlancos(telefono,email,email2,nombre,apellido) && coincidenEmails(email,email2) && esTelefono(telefono)){
            return true
        }
        else{
            return false
        }
    }
    const manejarCompra = (e) => {
        e.preventDefault()
        if(chequearDatos()){
            setSubido(subido + 1)
            const orden = {buyer:{nombre,telefono,email},
                       items:lista.map((elem)=>{return {id:elem.item.id,price:elem.item.price,title:elem.item.title,quantity:elem.quantity}}),
                       date: firebase.firestore.Timestamp.fromDate(new Date()),
                       total: actualizarTotal()}
                       const db = firestore
                       const collection = db.collection("orders")

                       collection
                       .add(orden)
                       .then((res)=>{
                           limpiarCarrito()
                           setId(res.id)
                       })
                       .catch(()=>{})
        }
        else{
            setSubido(subido+1)
        }   
    }
    return (
        <>
        <div className="wrapper-carrito">   
            <div className={lista.length == 0? "": "container-carrito"}>
                {lista.length == 0 ? <>
                    <h3>No hay items aún</h3>
                    <NavLink to="/">Regresar</NavLink>
                </>
                                    :
                <>
                    {lista.map((elemento) => {
                        return (
                            <>
                                <div className="item">
                                    <img src={elemento.item.pictureUrl}></img>
                                    <div className="info-carrito">
                                        <h2>{elemento.item.title}</h2>
                                        <p>precio x unidad: ${elemento.item.price}</p>
                                        <p className="cant">Cantidad : {elemento.quantity}</p>
                                        <p className="subTot">SubTotal: $ {elemento.item.price * elemento.quantity}</p>
                                    </div>
                                    <h2 onClick={()=>{removeItem(elemento)}} className="boton-cerrar"><AiOutlineClose></AiOutlineClose></h2>
                                </div>
                            </>
                        )
                    })}
                    <h2 className="tot">Total: ${actualizarTotal()}</h2>
                </>}
            </div>
            <div className={lista.length == 0 ? "container-form carrito-vacio" : "container-form"}>
                <div className="header">
                    <h2> Finalizar Compra</h2>
                </div>
                <form onSubmit={manejarCompra} className="form" id="form">
                    <div className={EstaVacio(nombre)}>
                        <label for="">Nombre</label>
                        <input onChange={e=>setNombre(e.target.value)} type="text" id="name" placeholder="matias1606" value={nombre}/>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <Error mensaje={nombre==""?"Este campo no puede estar vacio":""}></Error>
                    </div>
                    <div className={EstaVacio(apellido)}>
                        <label for="">Apellido</label>
                        <input onChange={e=>setApellido(e.target.value)} type="text" id="surname" placeholder="matias1606" value={apellido}/>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <Error mensaje={apellido==""?"Este campo no puede estar vacio":""}></Error>
                    </div>
                    <div className={EstaVacio(telefono)}>
                        <label for="">Telefono</label>
                        <input onChange={e=>setTelefono(e.target.value)} type="tel" id="phone" placeholder="+5491158709017" value={telefono}/>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <Error mensaje={telefono=="" ? "Este campo no puede estar vacio":!esTelefono(telefono)? "Ese numero de telefono es invalido" : ""}></Error>
                    </div>
                    <div className={EstaVacio(email)}>
                        <label for="">Email</label>
                        <input onChange={e=>setEmail(e.target.value)} type="email" id="e-mail" placeholder="matias1606@ejemplo.ar" value={email}/>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <Error mensaje={email=="" ? "Este campo no puede estar vacio":!esEmail(telefono)? "Esa direccion de email es invalida" : ""}></Error>
                    </div>
                    <div className={EstaVacio(email2)}>
                        <label for="">repetir-Email</label>
                        <input onChange={e=>setEmail2(e.target.value)} type="email" id="e-mail2" placeholder="matias1606@ejemplo.ar" value={email2}/>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <Error mensaje={email2=="" ? "Este campo no puede estar vacio": email2 != email ? "Los emails no coinciden": ""}></Error>
                    </div>
                    <button className={!hayBlancos(telefono,email,email2,nombre,apellido)? "boton-compra": "boton-error"}>Realizar Compra</button>
                </form>
                
            </div>
            {id != ""? <p>su orden de compra ha sido confirmada, Nro de orden : {id}</p>:null}
        </div> 
        </>
    )
}

export default Cart