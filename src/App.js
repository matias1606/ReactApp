import './App.css';
import React, { useEffect, useState } from "react";
import Cart from "./components/Cart"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartProvider from "./context/CartProvider"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import FormProvider from './context/FormProvider';

const App = () => {
  return (
      <div className="app">

        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <ItemListContainer greeting="Greeting" />
              </Route>
              <Route exact path="/category/:category">
                <ItemListContainer greeting="Greeting" />
              </Route>
              <Route exact path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/Cart">
                <FormProvider>
                  <Cart/>
                </FormProvider>
              </Route>
            </Switch>
          </CartProvider>
        </BrowserRouter>
      </div>

  );
}

export default App;
