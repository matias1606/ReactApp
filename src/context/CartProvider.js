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
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            let indice = lista.findIndex((elemento)=>{
                return elemento.item.id == item.id
            })
            let aux = lista
            aux[indice].quantity += quantity  
            setLista([...aux])
        }else{
            let aux = { item, quantity:quantity }
            setLista([...lista, aux])
            console.log(lista)
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
    }
    const actualizarCantidad = () => {
        let cantidad = 0;
        lista.forEach(elemento => cantidad += elemento.quantity)
        setCantidad(cantidad)
    }
    return (
        <>
            <Provider value={{addItem: addItem,lista:lista,removeItem:removeItem,Cantidad:Cantidad, actualizarCantidad:actualizarCantidad,Total:Total,actualizarTotal:actualizarTotal}}>
                {children}
            </Provider>
        </>
    )

}

export default CartProvider