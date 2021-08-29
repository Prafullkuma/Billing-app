import React from 'react'
import LoginUser from './LoginUser'
import Swal from 'sweetalert2'

import { loginAction } from '../../actions/userAction'

import { useDispatch } from 'react-redux'

const Login=(props)=>{

    const dispatch=useDispatch()

    const formSubmission=(formData)=>{
        const successMessage=()=>{
            Swal.fire({
                icon: 'success',
                text: 'Successfully LoggedIn'
            })
        }
        const errorMessage=(error)=>{
            Swal.fire({
                icon:'error',
                text:error.errors
            })
        }
        dispatch(loginAction(formData, props.history ,successMessage,errorMessage))
    }

    return(
        <div>
            <LoginUser formSubmission={formSubmission}/> 
        </div>
    )
}
export default Login