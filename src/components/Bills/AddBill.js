import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import BillForm from './BillForm'
import {addBillsAction} from '../../actions/billsAction'


const AddBill=({customers,products})=>{
    const dispatch=useDispatch()
    const [isSaved,setIsSaved]=useState(false)

    const formSubmission=(formData)=>{
        
       const formSaved=()=>{
           setIsSaved(true)
       }  
       dispatch(addBillsAction(formData,formSaved))  
    }
    const resetForm=()=>{
        setIsSaved(!isSaved)
    }
   return(
       <div style={{margin:'40px'}}>
            <BillForm customers={customers} products={products} formSubmission={formSubmission} resetForm={resetForm} isSaved={isSaved}/>
       </div>
   ) 
}
export default AddBill