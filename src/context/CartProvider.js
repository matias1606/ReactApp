import React, { useEffect, useState, useContext, createContext } from "react"
import { Provider } from "./cartContext"
const CartProvider = ({ children }) => {
    const [lista, setLista] = useState([])
    let [Total,setTotal] = useState(0)
    let [Cantidad,setCantidad] = useState(0)
    const isInCart = (id) => {
        const item = lista.filter(p => p.item.id == id)
        if(item.length > 0){
            return true
        }
        else{
            return false
        }
        }
        function addItem(newItem, quantity) {
            const idx = lista.findIndex((listI) => listI.item.id === newItem.id)
            if (idx === -1) {
                const l = [...lista, { item: newItem, quantity }]
                setLista(l)
            } else {
                const newQuantity = lista[idx].quantity + quantity
                const oldI = lista.filter((oldI) => oldI.item.id !== lista[idx].item.id)
                const l = [...oldI, { item: lista[idx].item, quantity: newQuantity }]
                setLista(l)
            }
        }
    
    const removeItem = (elemento)=>{
        const listaNew = lista.filter(p=> p.item.id != elemento.item.id)
        setLista(listaNew)
    }
    const actualizarTotal = () => {
        let suma = 0;
        lista.forEach(elemento => suma += elemento.item.price*elemento.quantity)
        setTotal(suma)
        return suma
    }
    const actualizarCantidad = () => {
        let cantidad = 0;
        lista.forEach(elemento => cantidad += elemento.quantity)
        setCantidad(cantidad)
        return cantidad
    }
    const limpiarCarrito = ()=>{
        setLista([])
    }
    return (
        <>
            <Provider value={{limpiarCarrito:limpiarCarrito,addItem: addItem,lista:lista,removeItem:removeItem,Cantidad:lista.length, actualizarCantidad:actualizarCantidad,Total:Total,actualizarTotal:actualizarTotal}}>
                {children}
            </Provider>
        </>
    )

}

export default CartProvider