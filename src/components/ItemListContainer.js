import React,{useState,useEffect} from 'react'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
let listaItems = [{id:"1",title:"REMERA YIRIH NEGRA",price:2000,pictureUrl:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwdCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
{id:"2",title:"REMERA CREATIVE",price:2100,pictureUrl:"https://images.unsplash.com/flagged/photo-1555728750-55f4db213833?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Ymx1ZSUyMHQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
{id:"1",title:"REMERA YIRIH NEGRA",price:2000,pictureUrl:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwdCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
{id:"2",title:"REMERA ADIDAS",price:2100,pictureUrl:"https://images.unsplash.com/photo-1598403031688-e7cfd2c222c4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdoaXRlJTIwdCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
]
const ItemListContainer = (prop) =>{
    const [items,setItems] = useState(listaItems)
    useEffect(() => {
        let promesa = new Promise((resolver,reject)=>{
            setTimeout(()=>{
                resolver(listaItems)
                console.log("El pedido fue realizado correctamente")
            },2000)
        })
        promesa.then((resolver)=>{
            setItems(resolver)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])
    return(
        <>
        {/* <h1>{prop.greeting}</h1> */}
        <ItemList items={items}/>
        <ItemCount stock={5} initial={0} onAdd={(cant)=>{console.log(cant)}}/>
        </>
    )
}
export default ItemListContainer