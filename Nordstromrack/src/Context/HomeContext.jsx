import React, { createContext, useState } from "react";
import all_product from "../assets/all_product"

export const HomeContext= createContext(null)

const getDefaultCart = ()=>{
    let cart ={}

    for(let index=0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart
}
const HomeContextProvider = (props) => {
    const [cartItem,setcartItem] = useState(getDefaultCart())
    
    
    const addToCart = (itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem)
    }
    const removeFromCart = (itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
   
    const contextValue = {all_product,cartItem,addToCart,removeFromCart};
    return(
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider