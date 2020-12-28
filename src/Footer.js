import React from 'react'

const Footer = (props) => {
    //Destructuring
    const {edad:otroNombre,salud:mensaje} = props
    console.log(otroNombre,mensaje)
    return (
        <>
            <footer>
            <p>&copy; Copyright</p>
            </footer>
            <button onClick="console.log()">
                hello
            </button>
        </>
    )
}
// Operador ternario 
// const reulstado = (condicion) ? retorno a : retorno b
export default Footer
