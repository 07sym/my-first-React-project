import "./Brands.css"
import new_collections from "../assets/new_collections"
import Item from "../Items/Item"
function Brands(){
    return(
        <div className="newCollections">
            
            <h1>Best Gift Ideas Up to 60% Off</h1>
            <hr/>
            <div className="collection">
                {new_collections.map((item,i)=>{
                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>   
                })}
            </div>

 
        </div>
    )
}
export default Brands