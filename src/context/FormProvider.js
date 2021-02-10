import React from "react"
import {Provider} from "./formContext"

const FormProvider = ({children})=>{
    const esEmail = (valor) =>{
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valor)
      }
    const esTelefono = (valor) =>{
        return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(valor)
    }
    const hayBlancos = (...params) => {
        let lista = [...params]
        let valor = false;
        lista.forEach(elem => elem == "" ? valor = true : null)
        return valor
    }
    const coincidenEmails = (em1,em2) =>{
        let valor = esEmail(em1)
        if(valor && em1 == em2){
            return true
        }
    }
    return(
        <>
        <Provider value={{esEmail:esEmail,esTelefono:esTelefono,hayBlancos:hayBlancos,coincidenEmails:coincidenEmails}}>
            {children}
        </Provider>
        </>
    )
}

export default FormProvider