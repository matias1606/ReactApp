import React, {useState} from "react"


const ItemCount = ({stock,initial,onAdd}) => {
    const [cantidad,setCantidad] = useState(initial)
    const [restante,setStock] = useState(stock)

    const aumentarCantidad = () => {
        cantidad >= restante ? alert("No puede superar la cantidad total de stock") : setCantidad(cantidad+1)
    }
    const restarCantidad = () => {
        cantidad > 0 && setCantidad(cantidad-1)
    }
    const AgregarAlCarrito = () =>{
        if(cantidad <= restante && restante != 0){
            onAdd(cantidad)
            setStock(restante-cantidad)
            setCantidad(0)
        }
    }

    return(
        <>
            <div className="cantidad">
                <p>Cantidad</p>
            </div>
            <div className="añadir">
                <div>
                    <button onClick={()=>{restarCantidad()}}>-</button>
                    <p>{cantidad}</p>
                    <button onClick={()=>{aumentarCantidad()}}>+</button>
                </div>    
            </div>
            <div className="carrito">
                <button  onClick={()=>{AgregarAlCarrito()}}>Agregar al Carrito</button>
            </div>
        </>
    )  
}

export default ItemCount