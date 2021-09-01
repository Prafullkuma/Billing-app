import React from 'react'
import BillForm from './BillForm'

const AddBill=({customers,products})=>{
    const formSubmission=(formData)=>{
        console.log("from Bill from",formData)
    }
    
   return(
       <div>
           <h1>Add Bill</h1>
            <BillForm customers={customers} products={products} formSubmission={formSubmission} />
       </div>
   ) 
}
export default AddBill