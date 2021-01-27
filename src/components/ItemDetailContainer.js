import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {firestore} from "../firebaseConfig"
const ItemDetailContainer = ()=>{
    let [item,setItem] = useState([])
    let {id} = useParams()
    useEffect(() => {
        const db = firestore;
        const collection = db.collection("items").where('id','==',id)
        console.log(collection)
        const query = collection.get()
        .then((resultado)=>{setItem(resultado.docs[0].data())})
        .catch(()=>{
          console.log("Algo salio mal!")
        })
      }, [])
    return (<>
            {<ItemDetail item={item}/>}
            </>)

}
export default ItemDetailContainer