import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Button,Dialog,DialogTitle,Input,FormControl,DialogContent,Box,DialogActions} from '@material-ui/core'
import { useSelector } from 'react-redux'

const BillForm=({customers,products,formSubmission,resetForm,isSaved})=>{
  
    const [myDate,setMyDate]=useState('')
    const [inputList, setInputList] = useState([{ id:uuidv4(),product: "",quantity: "" }])
    const [selectCustomer,setSelectCustomer]=useState('')
    const [errorObj,setErrorObj]=useState({})

    const user=useSelector((state)=>{
        return state.user
    })

    //modal    
    const [open, setOpen] = useState(false);

    //reset form
    useEffect(()=>{
        if(isSaved){
            setMyDate('')
            setInputList([{ id:uuidv4(),product: "",quantity: "" }])
            setSelectCustomer('') 
            resetForm()
        }
    },[isSaved,resetForm])

    //for errors

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
            setInputList([...inputList,{id:uuidv4(), product:"",quantity:"0"}])
       }
       
       //validation

       const runValidator=()=>{
         if(myDate.length ===0){
             errors.myDate="Date is not preset"
         }
         if(selectCustomer.length===0){
             errors.selectCustomer="Your not preset User"
         }
         if(inputList[0].product.length===0){
             errors.product="Product is not present"
         }
         if(inputList[0].quantity.length===0){
             errors.quantity="Quantity can't be empty"
         }
         if(Number(inputList[0].quantity)===0){
            errors.quantity="Quantity can't be 0"
         }  
       }
       //formSubmit
       const handleSubmit=(e)=>{
            e.preventDefault()
            runValidator()
            if(Object.keys(errors).length ===0){
                setErrorObj({})
                const formData={
                    date: myDate,
                    customer:selectCustomer,
                    lineItems:inputList,
                    user:user !== undefined && user._id
                }
                formSubmission(formData)
            }else{
                setErrorObj(errors)
            }
      } 

      //for modal

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
            setErrorObj({})
        };

    return(
        <div>
                 <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Generate Bill Here
                </Button>
                 <Dialog open={open} onClose={handleClose} >
                     <DialogTitle id="form-dialog-title"> Add Your Bill</DialogTitle>
                     <DialogContent>
          
                        <Box
                            display="flex"
                            flexWrap="nowrap"
                            sx={{ maxWidth: 400}}
                            p={1}
                            m={1}
                        >
                            <Box p={1} >
                            <form  noValidate  onSubmit={handleSubmit} autoComplete="off">
                                <FormControl>
                                    <Input type="date" 
                                    style={{  width: '25ch'}} value={myDate} onChange={handleDateChange}/>
                                    <br/>
                                    <span style={{color:'red'}}>{errorObj.myDate && <span>{errorObj.myDate}</span>}</span>        
                                    <br/>
                                </FormControl>
                                <br/><br/>  
                                
                                <FormControl>
                                <div>
                                    <select
                                        style={{width: '25ch'}}
                                        value={selectCustomer} onChange={handleSelectChange}
                                    >
                                    <option value="">Select Customer</option>
                                        {customers.map((ele,i)=>{
                                            return <option key={i} value={ele._id}>{ele.name}</option>
                                        })}  
                                    </select>
                                    <br/>
                                        <span style={{color:'red'}}>{errorObj.selectCustomer && <span>{errorObj.selectCustomer}</span>}</span>
                                        <br/>
                                   </div>    
                                </FormControl>
                                <FormControl>
                                {inputList.map((ele,i)=>{
                                return (
                                    <div key={i}>

                                        <select style={{ width: '25ch'}}
                                             value={ele.product} 
                                             name="product"
                                             onChange={(e)=>handleInputChange(e,i)}
                                          >
                                            <option value=""> Select Products </option>
                                            { 
                                                products.length !==0 && products.map((ele,ind)=>{
                                                return <option value={ele._id}  key={ind}>{ele.name}</option>
                                           
                                            })}
                                        </select>

                                      <br/>
                                        <span style={{color:'red'}}>{errorObj.product && <span>{errorObj.product}</span> }</span>
                                        <br/>
                                            <input
                                            name="quantity"
                                            placeholder="Enter the Quanity"
                                            value={ele.quantity}
                                            onChange={(e)=>handleInputChange(e,i)}   
                                        />
                                        <br/>
                                        <span style={{color:'red'}}>{errorObj.quantity && <span>{errorObj.quantity}</span>}</span>
                                        <br/>
                                        <div>
                                            {inputList.length !==1 &&
                                            <>
                                                <Button  color="secondary" onClick={()=>handleRemoveClick(i)}>
                                                    remove
                                                </Button>
                                                <br/>
                                            </>
                                            }
                                            {
                                                inputList.length -1 ===i &&
                                                <Button variant="contained" color="primary" onClick={handleAddClick}>
                                                     more
                                                </Button>
                                            }

                                        </div>
                                    </div>
                                ) 
                                })}

                                </FormControl>
                                    
                                    <DialogActions>
                                            <Button onClick={handleClose} color="primary">
                                                Cancel
                                            </Button>
                                            <Button  variant="outlined" type="submit" color="primary">
                                                   add Bill
                                            </Button> 
                                    </DialogActions>      
                            </form>
                            </Box>
                        
                        </Box>
                     </DialogContent>  

                 </Dialog>
        </div>
    )
}
export default BillForm