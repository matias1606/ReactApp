import Item from "./Item"

const ItemList = ({items}) => {
    return(
        <div className="itemList">
            {items.map((item)=>{
                return (
                    <Item id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl}/>
                 )
            })}
        </div>
    )
}

export default ItemList