import React, { useEffect, useContext, useState } from "react"
import cartContext from "../context/cartContext"
import { Link, NavLink } from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
import {firestore} from "../firebaseConfig"
import firebase from "firebase"
const Cart = () => {
    const { lista, actualizarTotal,removeItem,limpiarCarrito} = useContext(cartContext);
    const [telefono, setTelefono] = useState("")
    const [nombre,setNombre] = useState("")
    const [email,setEmail] = useState("")
    const [id, setId] = useState("")

    const manejarCompra = (e) => {
        e.preventDefault()
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
    return (
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
                <form onSubmit={manejarCompra}>
                <div>
                    <input onChange={e=>setNombre(e.target.value)} type="text" placeholder="nombre" value={nombre} />
                </div>
                <div>
                    <input onChange={e=>setTelefono(e.target.value)} type="tel" placeholder="Telefono" value={telefono}/>
                </div>
                <div>
                    <input onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" value={email}/>
                </div>
                <button>Comprar</button>
            </form>
            </>}
            {id != ""? <p>su orden de compra ha sido confirmada, Nro de orden : {id}</p>:null}
        </div>
    )
}

export default Cart
