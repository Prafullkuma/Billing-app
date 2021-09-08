import React from 'react'

const CartItem=({quantity,product,products})=>{


    const getProduct=()=>{
        if(product.length!==0){
           const result=products.find((ele)=>{
               return ele._id===product
           })
           console.log("gotVAlues",result.name) 
           return result.name
        }
    }

    return(
        <>

            <li>{quantity} -{getProduct(product)}</li>
        </>
    )
}
export default CartItem