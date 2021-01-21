import React, { useContext, useState } from "react"
import cartContext from "../context/cartContext"
const Cart = () => {
    const { lista } = useContext(cartContext)
    return (
        <div>
            {lista.map((elemento) => {
                return (
                    <div>
                        <h1>{elemento.item.id}</h1>
                        <button>remover</button>
                    </div>

                )
            })}

        </div>
    )
}

export default Cart
