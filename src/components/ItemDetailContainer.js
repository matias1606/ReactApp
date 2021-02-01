import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {firestore} from "../firebaseConfig"
const ItemDetailContainer = ()=>{
    let [item,setItem] = useState([])
    let {id} = useParams()
    useEffect(() => {
        const db = firestore;
<<<<<<< HEAD
        const collection = db.collection("items").doc(id)
        const query = collection.get()
        .then((resultado)=>{
          setItem({id: resultado.id,...resultado.data()})})
=======
        const collection = db.collection("items").where('id','==',id)
        console.log(collection)
        const query = collection.get()
        .then((resultado)=>{setItem(resultado.docs[0].data())})
>>>>>>> c43f4407b47194166d2edf2b13e26a67c3ed838c
        .catch(()=>{
          console.log("Algo salio mal!")
        })
      }, [])
    return (<>
            {<ItemDetail item={item}/>}
            </>)

}
export default ItemDetailContainer