import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {firestore} from "../firebaseConfig"
const ItemDetailContainer = ()=>{
    let [item,setItem] = useState([])
    let {id} = useParams()
    useEffect(() => {
        const db = firestore;
        const collection = db.collection("items").doc(id)
        const query = collection.get()
        .then((resultado)=>{
          setItem({id: resultado.id,...resultado.data()})})
        .catch(()=>{
          console.log("Algo salio mal!")
        })
      }, [])
    return (<>
            {<ItemDetail item={item}/>}
            </>)

}
export default ItemDetailContainer