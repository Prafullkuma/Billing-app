import React, { useState,useEffect } from 'react'

const ProdcutsForm=({formSubmission,toggleStatus,isSaved})=>{
     const [name,setName]=useState('')
     const [price,setPrice]=useState('')
     const [errorObj,setErrorObj]=useState({})

     let errors={}

     useEffect(()=>{
        if(isSaved){
            setName('')
            setPrice('')
            toggleStatus()
        }
     },[isSaved,toggleStatus])

     const runValidatior=()=>{
        if(name.length===0){
            errors.name="Name can't be blank"
        }
        else if(price<=0){
             errors.price="Price is not set"   
        }
     } 
     const handleSubmit=(e)=>{
        e.preventDefault()
         runValidatior()

         if(Object.keys(errors).length===0){
             setErrorObj({})
                const formData={
                    name:name,
                    price:Number(price)
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
                <input type="text" placeholder="Enter produt name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <span>{errorObj.name && <span>{errorObj.name}</span>}</span>
                <br/>
                <input type="text" placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
                <span>{errorObj.price && <span>{errorObj.price}</span>}</span>
                <br/>
                <input type="submit" value="Add Products"/>
            </form>
        </div>
    )
}
export default ProdcutsForm