import React, { useContext } from "react";
import "./ProductDisplay.css"
import star_icon from "../assets/star_icon.png"
import start_dull_icon from "../assets/star_dull_icon.png"
import Item from "../Items/Item";
import { HomeContext } from "../Context/HomeContext";

function ProductDisplay(props){
    const {product} = props;
    const{addToCart} = useContext(HomeContext)
    return(
        <div className="productdisplay">
         <div className="productdisplay-left">
           <div className="productdisplay-img-list">
             <img src={product.image}/>
             <img src={product.image}/>
             <img src={product.image}/>
             <img src={product.image}/>
           </div>
           <div className="productdisplay-img">
             <img className="productdisplay-main-img" src={product.image}/>
            </div>
         </div>
         <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={start_dull_icon}/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            A tonal sash accentuates your figure in a long-sleeve sweater dress with a flattering fit-and-flare profile.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category:</span>Women,T-shirt,Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags:</span>Mordern,Latest</p>
         </div>
        </div>
    )
}
export default ProductDisplay