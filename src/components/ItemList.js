import Item from "./Item"

const ItemList = ({items}) => {
    return(
        <div className="itemList">
            {items.map((item)=>{
                return (
                    <Item category={item.category} id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl}/>
                 )
            })}
        </div>
    )
}

export default ItemList