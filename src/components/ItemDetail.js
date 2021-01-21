import React,{useContext, useState} from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import cartContext from "../context/cartContext"
const ItemDetail = ({item}) =>{
    const [cantidad,setCantidad] = useState(0)
    const {addItem} = useContext(cartContext)
    const onAdd = (cant)=>{
        setCantidad(cant)
        addItem(item,cant)
    }
    return (
            <>
            {item.title ? <><div className="detalles">
                    <img src={item.pictureUrl} alt=""/>
                    <div className="caracteristicas">
                        <p className="detalle nombre">{item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1):null}</p>
                        <p className="detalle precio">${item.price}</p>
                        {cantidad >= 1 ? <Link onClick={()=>{}} to="/Cart">Terminar compra</Link> : <ItemCount stock={5} initial={0} onAdd={onAdd}/>}
                        <p className="detalle descripcion">{item.descripcion}</p>
                    </div>
                    
                </div>
                </>:null}  
            </>
    )
}

export default ItemDetail