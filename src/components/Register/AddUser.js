import React ,{useEffect, useState} from 'react'
import validator from 'validator';

const AddUser=({formSubmission,handleIsSaved,isSaved})=>{
     
     const [username,setUsername]=useState('')
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')
     const [businessName,setBusinessName]=useState('')
     const [address,setAddress]=useState('')
     const [errorObj,setErrorObj]=useState({})

     let errors={}

     useEffect(()=>{
        if(isSaved){
           setUsername('')
           setEmail('')
           setPassword('')
           setBusinessName('')
           setAddress('') 
           handleIsSaved()
        }
     },[isSaved,handleIsSaved])

     const handleChange=(e)=>{
         const attr=e.target.name
         if(attr==="username"){
             setUsername(e.target.value)
         }
         else if(attr==="email"){
             setEmail(e.target.value)
         }
         else if(attr==="password"){
             setPassword(e.target.value)
         }
         else if(attr==="businessName"){
             setBusinessName(e.target.value)
         }
         else if(attr==="address"){
             setAddress(e.target.value)
         }
     }

     //Validation

     const runValidator=()=>{
         if(username.length===0){
             errors.username="username can't be blank"
         }
         else if(username.length<3){
            errors.username="username is to short"
         }
         if(email.length===0){
             errors.email="email can't be blank"
         }
         else if(!validator.isEmail(email)){
            errors.email="Email is not valid"
         }

         if(password.length===0){
             errors.password="Password can't be blank"
         }
         
         if(businessName.length===0){
             errors.businessName="Business name can't be blank"
         }
         if(address.length===0){
             errors.address="Address can't be blank"
         }
     }

     const handleSubmit=(e)=>{
         e.preventDefault()
         runValidator()
          if(Object.keys(errors).length===0){          
               setErrorObj({})
               const formData={
                    username:username,
                    email:email.toLowerCase(),
                    password:password,
                    businessName:businessName,
                    address:address
                }
            formSubmission(formData) 
          }
          else{
            setErrorObj(errors)
          }
     }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  name="username" value={username}  onChange={handleChange} placeholder="Enter Your name"/>
                <span>{errorObj.username && <span>{errorObj.username}</span>}</span>
                <br/>
                <input type="text"  name="email" value={email} onChange={handleChange} placeholder="Enter Email"/>
                <span>{errorObj.email && <span>{errorObj.email}</span>}</span>
               
                <br/>
                <input type="text"  name="password" value={password} onChange={handleChange} placeholder="Enter Password"/>
                <span>{errorObj.password && <span>{errorObj.password}</span>}</span>
               
                <br/>
                <input type="text"  name="businessName" value={businessName} onChange={handleChange} placeholder="Enter business Name"/>
                <span>{errorObj.businessName && <span>{errorObj.businessName}</span>}</span>
               
                <br/>
                <input type="text"  name="address" value={address} onChange={handleChange} placeholder="Enter Address"/>
                <span>{errorObj.address && <span>{errorObj.address}</span>}</span>
               
                <br/>
                <input type="submit" value="Register"/><br/>
            </form>
        </div>
    )
}
export default AddUser