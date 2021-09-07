import React from 'react'

const CartItem=({id,product,quantity,products,decrementQuantity,incrementQuantity})=>{


    const getProduct=()=>{
        if(product.length!==0){
           const result=products.find((ele)=>{
               return ele._id===product
           }) 
           return result
        }
    }
    return(
        <>
        <tr>
            <td>{product.length !==0 && getProduct(product).name}</td>
                <td>
                    <button  disabled={quantity<=1} onClick={()=>decrementQuantity(id)}>-</button>
                    <span style={{margin:'5px'}}>{  quantity }</span>
                    <button onClick={()=>incrementQuantity(id)}> +</button>
                   
                </td>
           </tr>
        </>
    )
}
export default CartItem