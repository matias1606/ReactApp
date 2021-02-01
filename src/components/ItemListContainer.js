import React,{useState,useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {firestore} from "../firebaseConfig"
const ItemListContainer = ({prop}) =>{
    const [items,setItems] = useState([])
    const {category} = useParams()
    useEffect(() => {
        const db = firestore;
        const collection = category != undefined ? db.collection("items").where('categoryId','array-contains',category) : db.collection("items")
        const query = collection.get()
<<<<<<< HEAD
        .then(({docs})=>{setItems(docs.map(doc=>({id:doc.id,...doc.data()})))})
=======
        .then((resultado)=>{setItems(resultado.docs.map(doc=>doc.data()))})
>>>>>>> c43f4407b47194166d2edf2b13e26a67c3ed838c
        .catch(()=>{
          console.log("Algo salio mal!")
        })
      }, [category])
    return(
        <>
        {/* <h1>{prop.greeting}</h1> */}
        <ItemList items={items}/>
        </>
    )
}
export default ItemListContainer