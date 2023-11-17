import React ,{ useContext } from "react"
import { HomeContext } from "../Context/HomeContext"
import { useParams } from "react-router-dom"
import ProductDisplay from "../ProductDisplay/ProductDisplay"



function Product (){
    const {all_product}= useContext(HomeContext)
    const {productId} = useParams()
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <ProductDisplay product = {product}/>
        </div>
    )
}
export default Product