import React, { useState } from 'react'
import validator from 'validator'

const LoginUser=({formSubmission })=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errorObj,setErrorObj]=useState({})

    let errors={}
    
    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="email"){
            setEmail(e.target.value)
        }
        else if(attr==="password"){
            setPassword(e.target.value)
        }
    }
    //validation

    const runValidator=()=>{
        if(email.length===0){
            errors.email="Email can't be blank"
        }
        else if(!validator.isEmail(email)){
            errors.email="Email is not valid"
        }
        if(password.length===0){
            errors.password="Password can't be blank"
        }   
    }

    const submitHandle=(e)=>{
         e.preventDefault()
         runValidator()  
         if(Object.keys(errors).length===0){
            setErrorObj({})
            const formData={
                email:email,
                password:password
            }
            formSubmission(formData)
         }
         else {
            setErrorObj(errors)
         }
    }
    return(
        <div>
            <form onSubmit={submitHandle}>
                <input type="text" name="email" value={email} onChange={handleChange} placeholder="Enter Email"/>
                <span>{errorObj.email && <span>{errorObj.email}</span>}</span>
                <br/>
                <input type="text" name="password" value={password} onChange={handleChange} placeholder="Enter Password" />
                <span>{errorObj.password && <span>{errorObj.password}</span>}</span>
                <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
export default LoginUser