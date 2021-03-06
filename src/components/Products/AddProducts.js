import React,{useState} from 'react'
import { useDispatch } from 'react-redux'


import ProductsForm from './ProductsForm'
import {addProductsAction} from '../../actions/productsAction'
import Swal from 'sweetalert2'

const AddProducts=()=>{
    const [isSaved,setIsSaved]=useState(false)

    const dispatch=useDispatch()
    const formSubmission=(formData)=>{
        const successMessage=()=>{
             Swal.fire({
                 'text':'Product added successfully',
                 'icon':"success"
             })
        }
        const setResetFormHandle=()=>{
            setIsSaved(true)
        }
        dispatch(addProductsAction(formData,successMessage,setResetFormHandle))   
    }
    const toggleStatus=()=>{
        setIsSaved(!isSaved)
    }
    
    return(
        <div style={{margin:'40px'}}>
            <ProductsForm formSubmission={formSubmission} toggleStatus={toggleStatus} isSaved={isSaved} />
        </div>
    )
}
export default AddProducts