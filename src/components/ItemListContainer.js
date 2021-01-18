import React,{useState,useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({prop}) =>{
    const [items,setItems] = useState([])
    const {category} = useParams()
    const texto = category != undefined ? `https://5ffb4c7363ea2f0017bdb048.mockapi.io/item/items?category=${category}` : `https://5ffb4c7363ea2f0017bdb048.mockapi.io/item/items`
    useEffect(() => {
        fetch(texto)
        .then((res)=>{
            return res.json()
        }).then((res)=>{
            setItems(res)
        })
        .catch((error)=>{
            console.log(error)
        })  
    }
, [category])
    return(
        <>
        {/* <h1>{prop.greeting}</h1> */}
        <ItemList items={items}/>
        </>
    )
}
export default ItemListContainer