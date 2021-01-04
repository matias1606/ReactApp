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
        <div className="grid-container">
            <div className="IMG">
                <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className="Nombre">
                Remera X SSSS
            </div>
            <div className="Precio">
                <p>Precio</p>
            </div>
            <div className="descripcionPrecio">
                <p>$2000</p>
            </div>
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
        </div>
        </>
    )  
}

export default ItemCount