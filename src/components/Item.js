import React from 'react'
import ItemCount from './ItemCount'
import {Link} from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
const Item = ({category,id,title,price,pictureUrl}) => {
    return(<>
        <Link to={`/item/${id}`}>
                <div className="producto">
                    <div className="img">
                        <img src={`${pictureUrl}`} alt={`producto#${id}`}/>
                    </div>
                    <div className="nombre">
                        {title}
                    </div>
                    <div className="precio">
                        <p>${price}</p>
                    </div>  
                </div>
        </Link>
    </>
    )
         
}

export default Item