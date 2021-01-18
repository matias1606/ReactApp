
import './App.css';
import React,{useEffect,useState} from "react";
import Footer from "./layout/Footer";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Route, Switch} from "react-router-dom"
const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="Greeting"/>
            </Route>
            <Route exact path="/category/:category">
              <ItemListContainer greeting="Greeting"/>
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer/>
            </Route>
          </Switch> 
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
