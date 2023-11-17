import React from "react";
import "./popular.css"
import data_product from "../assets/data"
import Item from "../Items/Item";


function Popular(){
    return(
        <div >
            <div className="dealsbtn">
              <h1>500+ Deals Up to Off</h1>
              <button>View All</button>
          </div>
          <hr/>
          <div className="popular-item">
            {data_product.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
          </div>
        </div>
    )
}
export default Popular