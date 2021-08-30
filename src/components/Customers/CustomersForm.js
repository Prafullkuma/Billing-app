import React, { useEffect, useState } from 'react'
import validator from 'validator'

const CustomerForm=({formSubmission,isSaved,resetFormHandle})=>{
    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [errorObj,setErrorObj]=useState({})
    
    let errors={}

    useEffect(()=>{
        if(isSaved){
            setName('')
            setMobile('')
            setEmail('')
            resetFormHandle()
        }
    },[isSaved,resetFormHandle])
    
    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="name"){
            setName(e.target.value)
        }
        else if(attr==="mobile"){
            setMobile(e.target.value)
        }
        else if(attr==="email"){
            setEmail(e.target.value)
        }
    }
    const runValidator=()=>{
        if(name.length===0){
            errors.name="Name can't be blank"
        }
        if(mobile.length===0){
            errors.mobile="Mobile can't be blank"
        }
        else if(mobile.length !==10){
            errors.mobile="Mobile should be 10 digit"
        }

        if(email.length===0){
            errors.email="Email can't be blank"
        }
        else if(!validator.isEmail(email)){
            errors.email="Email is not valid"
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidator()
        if(Object.keys(errors).length===0){
            setErrorObj({})
                const formData={
                    name:name,
                    mobile:mobile,
                    email:email.toLowerCase()
                }
                formSubmission(formData)
        }else{
            setErrorObj(errors)
        }
    }
    return( 
        <div>
              <form onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Enter name" value={name} onChange={handleChange}/>
                  <span>{errorObj.name && <span>{errorObj.name}</span>}</span>
                  <br/><br/>
                  <input type="text" name="mobile" placeholder="Enter mobile" value={mobile} onChange={handleChange}/>
                  <span>{errorObj.mobile && <span>{errorObj.mobile}</span>}</span>
                  <br/><br/>
                  <input type="text" name="email" placeholder="Enter email" value={email} onChange={handleChange}/>
                  <span>{errorObj.email && <span>{errorObj.email}</span>}</span>
                  <br/><br/>
                  <input type="submit" value="Add customer"/>
              </form>  

        </div>
    )
}
export default CustomerForm