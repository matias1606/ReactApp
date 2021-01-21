import React, { useEffect, useState, useContext, createContext } from "react"
import { Provider } from "./cartContext"
const CartProvider = ({ children }) => {
    const [lista, setLista] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [enCarrito,setEnCarrito] = useState(false)
    const isInCart = (id) => {
        const item = lista.filter(p => p.item.id == id)
        if(item.length > 0){
            return true
        }
        else{
            return false
        }
        }
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            let indice = lista.findIndex((elemento)=>{
                return elemento.item.id == item.id
            })
            lista[indice].quantity += quantity
        }else{
            let aux = { item, quantity:quantity }
            setLista([...lista, aux])
        }
        
    }
    return (
        <>
            {console.log(lista)}
            <Provider value={{ addItem: addItem,lista:lista }}>
                {children}
            </Provider>
        </>
    )

}

export default CartProvider