import React,{useEffect} from "react"
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPhIpSz0unSAyABaf9x3GxM1kn339dVLQ",
    authDomain: "react-coder-6cb66.firebaseapp.com",
    projectId: "react-coder-6cb66",
    storageBucket: "react-coder-6cb66.appspot.com",
    messagingSenderId: "842400680158",
    appId: "1:842400680158:web:65fcdf549e590b2045da4f",
    measurementId: "G-JGG4JMJNMY"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

var menu = [
    {
      "id":"1",
      "categoryId":["H","M"],
      "title":"remera yirih negra",
      "price":2000,
      "pictureUrl":"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwdCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "descripcion":"Mira nuestros ultimos lanzamientos!",
      "stock":5
    },
    {
      "id":"2",
      "categoryId":["H","M"],
      "title":"remera creative",
      "price":2100,
      "pictureUrl":"https://images.unsplash.com/flagged/photo-1555728750-55f4db213833?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Ymx1ZSUyMHQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "descripcion":"Mira nuestros ultimos lanzamientos!",
      "stock":5
    },
    {
      "id":"3",
      "categoryId":["H","M"],
      "title":"remera yirih negra",
      "price":2000,
      "pictureUrl":"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwdCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "descripcion":"Mira nuestros ultimos lanzamientos!",
      "stock":5
    },
    {
      "id":"4",
      "categoryId":["H","M"],
      "title":"remera adidas",
      "price":2100,
      "pictureUrl":"https://images.unsplash.com/photo-1598403031688-e7cfd2c222c4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdoaXRlJTIwdCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "descripcion":"Mira nuestros ultimos lanzamientos!",
      "stock":5
    }
  ]
const FirebasePush = () =>{
    useEffect(() => {
        menu.forEach((obj)=>{
            db.collection("items").add({
                id:obj.id,
                categoryId: obj.categoryId,
                title:obj.title,
                price:obj.price,
                pictureUrl:obj.pictureUrl,
                descripcion:obj.descripcion,
                stock:obj.stock
            }).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        })
    }, [])
    return (
        <div></div>
    )
}

export default FirebasePush