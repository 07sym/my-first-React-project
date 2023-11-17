import React, { useContext } from "react"
import { HomeContext } from "../Context/HomeContext"

import Item from "../Items/Item"
import "../CSS/HomeContext.css"

function HomeCategory(props){
    const {all_product} = useContext(HomeContext)
    return(
        <div className="Home-Category">
         <img className="homecategory-banner" src={props.banner}/>
         <div className="homecategory-indexSort">
           <p>
            <span>Showing 1-12</span> out of 36 products
           </p>
           <div className="homecategory-sort">
            Sort by 
           </div>
         </div>
         <div className="homecategory-products">
            {all_product.map((item,i)=>{
               if(props.category === item.category){
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
               }
               else{
                return null
               }
            })}
         </div>
        </div>
    )
}
export default HomeCategory