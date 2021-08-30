import React, { useState } from 'react'
import CustomersForm from './CustomersForm'
import { addCustomerAction } from '../../actions/customersAction'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

const AddCustomers=()=>{

    const dispatch=useDispatch()

    const [isSaved,setIsSaved]=useState(false)

    const formSubmission=(formData)=>{
         const successMessage=()=>{
            Swal.fire({
                icon: 'success',
                text: 'Successfully registered'
            })
         }
       const setResetFormHandle=()=>{
          setIsSaved(true)
       }  
       dispatch(addCustomerAction(formData,successMessage,setResetFormHandle))
          
    }
    const resetFormHandle=()=>{
        setIsSaved(!isSaved)
    }    

    return(
        <div>
            <h1>Add customers</h1>
            <CustomersForm formSubmission={formSubmission} resetFormHandle={resetFormHandle} isSaved={isSaved}/>
        </div>
    )
}
export default AddCustomers