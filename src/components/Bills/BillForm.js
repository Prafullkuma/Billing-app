import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const BillForm=({customers,products,formSubmission})=>{
  
    const [myDate,setMyDate]=useState('')
    const [inputList, setInputList] = useState([{ id:uuidv4(),product: "", quantity: "" }])

    const [selectCustomer,setSelectCustomer]=useState('')
    
    const [errorObj,setErrorObj]=useState({})

    let errors={}

        const handleSelectChange=(e)=>{
            const result=e.target.value
            setSelectCustomer(result)          
        }
        
        const handleDateChange=(e)=>{
            const result=e.target.value
            setMyDate(result)
        }
       //handleing input and select fields
       const handleInputChange=(e,i)=>{
            const name=e.target.name
            const value=e.target.value
            const list=[...inputList]
            list[i][name]=value
            setInputList(list)
       }

       //handle remove Button
       const handleRemoveClick=(i)=>{   
         const list=[...inputList]
         list.splice(i,1)
         setInputList(list)
       }
       const handleAddClick=()=>{
            setInputList([...inputList,{id:uuidv4(),product:"",quantity:""}])
       }
       
       //validation

       const runValidator=()=>{
         if(myDate.length ===0){
             errors.myDate="Date is not selected"
         }
         if(selectCustomer.length===0){
             errors.selectCustomer="Your not selected User"
         }
         if(inputList[0].product.length===0){
             errors.product="Product is not selected"
         }
         if(inputList[0].quantity.length===0){
             errors.quantity="Quantity can't be empty"
         }
         if(Number(inputList[0].quantity)==="0"){
            errors.quantity="Quantity can't be 0"
         }
       }

       const handleSubmit=(e)=>{
            e.preventDefault()
            runValidator()
            if(Object.keys(errors).length ===0){
                setErrorObj({})
                const formData={
                    date: myDate,
                    user:selectCustomer,
                    lineItems:inputList
                }
                formSubmission(formData)
            }else{
                setErrorObj(errors)
            }
      } 

    return(
        <div>
            <form onSubmit={handleSubmit}>
                  <input type="date" value={myDate} onChange={handleDateChange}/>
                  <br/>
                  <span>{errorObj.myDate && <span>{errorObj.myDate}</span>}</span>        
                <br/><br/>

                <select value={selectCustomer} onChange={handleSelectChange}>
                    <option value="">Select Customer</option>
                    {customers.map((ele,i)=>{
                        return <option key={i} value={ele._id}>{ele.name}</option>
                    })}    
                </select>
                <br/>
                <span>{errorObj.selectCustomer && <span>{errorObj.selectCustomer}</span>}</span>
                <br/>
                {inputList.map((ele,i)=>{
                   return (
                       <div key={i}>
                       <select value={ele.product} name="product" onChange={(e)=>handleInputChange(e,i)}>
                           <option value="">Select Product</option>
                            { products.length !==0 && products.map((ele,ind)=>{
                                return <option value={ele._id} key={ind}>{ele.name}</option>
                            })}
                       </select>
                       <br/>

                       <span>{errorObj.product && <span>{errorObj.product}</span> }</span>
                       <br/>

                       <input
                            name="quantity"
                            placeholder="Enter the Quanity"
                            value={ele.quantity}
                            onChange={(e)=>handleInputChange(e,i)}   
                        />
                        <br/>
                        <span>{errorObj.quantity && <span>{errorObj.quantity}</span>}</span>
                        <br/>
                        <div>
                            {inputList.length !==1 &&
                             <button onClick={()=>handleRemoveClick(i)}>
                                 remove
                             </button>
                            }
                            {
                                inputList.length -1 ===i &&
                                <button onClick={handleAddClick}>
                                    add more
                                </button>
                            }

                        </div>
                       </div>
                   ) 
                })}
                <input type="submit" value="Add Bill"/>  
            </form>
        </div>
    )
}
export default BillForm