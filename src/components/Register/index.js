import React, { useState } from 'react'
import AddUser from './AddUser'
import { registerAction } from '../../actions/userAction'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

const Register=(props)=>{
    const [isSaved,setIsSaved]=useState(false)
    const dispatch=useDispatch()

    const formSubmission=(formData)=>{      
        const successMessage=()=>{
            Swal.fire({
                icon: 'success',
                text: 'Successfully registered'
            })
        }
        const errorMessage=(error)=>{
            console.log("i got it from errors Message",error)
            Swal.fire({
                icon:'error',
                text:error
            })
        }
        const setSavedDetails=()=>{
            setIsSaved(true)
        }
        
        dispatch(registerAction(formData,successMessage,errorMessage,setSavedDetails,props.history))  
    }
    const handleIsSaved=()=>{
        setIsSaved(!isSaved)
    }

    return(
        <div>
            <h1>Regitser</h1>
            <AddUser formSubmission={formSubmission} isSaved={isSaved} handleIsSaved={handleIsSaved}/>
        </div>
    )
}
export default Register