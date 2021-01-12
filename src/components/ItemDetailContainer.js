import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ()=>{
    let [item,setItem] = useState([])
    let {id} = useParams()
    useEffect(() => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(fetch(`https://5ffb4c7363ea2f0017bdb048.mockapi.io/item/items?id=${id}`)),1000)
          });
        
            promise.then((res)=>{
                return res.json()
            }).then((res)=>{
                console.log(res[0])
                setItem(res[0])
            })
            .catch((error)=>{
                console.log(error)
            })     
        }
    , [])
    return (<>
            {<ItemDetail item={item}/>}
            </>)

}
export default ItemDetailContainer