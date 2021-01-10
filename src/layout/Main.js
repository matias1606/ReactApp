import React from 'react'
import {Route} from "react-router-dom"
import Home from "./components/Home"
//tengo que crear tantas rutas como componentes necesito que se cambien 
// no cree los componentes pero deberia
const Main = () => {
    return (
        <main>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
        </main>
    )
}

export default Main
