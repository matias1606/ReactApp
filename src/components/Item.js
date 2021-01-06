import React from 'react'
import ItemCount from './ItemCount'
const Item = ({id,title,price,pictureUrl}) => {
    return(<>
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
    </>
    )
         
}

export default Item