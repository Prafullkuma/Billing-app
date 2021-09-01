import React from 'react'
import { useDispatch } from 'react-redux'
import BillForm from './BillForm'
import {addBillsAction} from '../../actions/billsAction'

const AddBill=({customers,products})=>{
    const dispatch=useDispatch()

    const formSubmission=(formData)=>{

          console.log("fromHandler",formData)
        
         dispatch(addBillsAction(formData))
        
    }
   return(
       <div>
           <h1>Add Bill</h1>
            <BillForm customers={customers} products={products} formSubmission={formSubmission} />
       </div>
   ) 
}
export default AddBill