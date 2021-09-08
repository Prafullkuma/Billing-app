import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Button,Dialog,DialogTitle,Input,TableContainer,Table,TableHead,FormControl,DialogContent,Box,DialogActions} from '@material-ui/core'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Select from 'react-select'


const BillForm=({customers,products,formSubmission,resetForm,isSaved})=>{
  
    const [myDate,setMyDate]=useState('')
    const [selectCustomer,setSelectCustomer]=useState('')
    const [lineItems,setLineItems]=useState([])

    const [filteredCustomer,setFilteredCustomer]=useState([])
    const [filteredProducts,setFilteredProducts]=useState([])
    const [selectedValue, setSelectedValue] = useState([]);

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
            setSelectCustomer('') 
            resetForm()
        }
    
    },[isSaved,resetForm])

       //for errors
       let errors={}
      
       //For React Select  
        const handleDateChange=(e)=>{
            const result=e.target.value
            setMyDate(result)
        }

        //Genarate Data for Customer
        const handleChange=(item)=>{
            setSelectCustomer(item)
        }

        useEffect(()=>{
            const result=customers.map((ele)=>{ 
                return {value:ele._id,label:ele.name}
            })
            setFilteredCustomer(result)
        },[customers])

        //GEnerate Data for Products
        const multiHandleChange=(e)=>{
            const result=e.map((ele)=>{
                return ele.value || []
            })
            console.log("value found",result)
            setSelectedValue(result)
        }
        useEffect(()=>{
            const result=products.map((ele)=>{
                return {value:ele._id,label:ele.name}
            })
            setFilteredProducts(result)
        },[products])
       
        // forAdding lineItems
          const addIitem=(items)=>{
                const result=items.map((ele)=>{
                    return {id:uuidv4(),product:ele,quantity:"1"}
                })
              setLineItems(result)  
          }
        
       //validation

       const runValidator=()=>{
         if(myDate.length ===0){
             errors.myDate="Date is not preset"
         }
         if(selectCustomer.length===0){
             errors.selectCustomer="Your not preset User"
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
                    lineItems:lineItems,
                    user:user !== undefined && user._id
                }
              console.log("final result",formData)
                // formSubmission(formData)
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

                 <Dialog open={open} onClose={handleClose} style={{padding:'20px'}}>
                     <DialogTitle id="form-dialog-title"> Add Your Bill</DialogTitle>
                     <DialogContent>                 
                        <Box
                            display="flex"
                            flexWrap="nowrap"
                            sx={{ maxWidth: 900}}
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

                                        <label>Select Customers</label>                                    
                                        <Select
                                            placeholder="Select Customer"
                                            options={filteredCustomer}
                                            onChange={handleChange}
                                            value={selectCustomer}
                                        />  
                                        <span style={{color:'red'}}>{errorObj.selectCustomer && <span>{errorObj.selectCustomer}</span>}</span>
                                        <br/>
                                        <label>Select Products</label>
                                        <Select
                                                placeholder="Select Multpile Products"
                                                options={filteredProducts}
                                                defaultValue=""
                                                value={filteredProducts.filter(ele=> selectedValue.includes(ele.value))}
                                                onChange={multiHandleChange}  
                                                isMulti
                                                className="dropdown"
                                        />  
                                        <br/>

                                        <div>
                                            <Button variant="contained" color="primary" onClick={()=>addIitem(selectedValue)}>Add Items </Button>
                                        </div>

                                        <hr/>
                                            <DialogActions>
                                                    <Button onClick={handleClose} color="primary">
                                                        Cancel
                                                    </Button>
                                                    <Button  variant="outlined"  onClick={handleClose} type="submit" color="primary">
                                                        add Bill
                                                    </Button> 
                                            </DialogActions>      
                                    </form>
                            </Box>
                            <TableContainer>
                                <Table>
                                <TableHead>
                                        <TableRow>
                                          <TableCell>Product Name</TableCell>
                                          <TableCell>Quantity</TableCell>
                                          <TableCell>Remove</TableCell>        
                                        </TableRow>

                                </TableHead>
                                <TableBody>
                                <TableRow>
                                    
                                      {
                                       lineItems.map((ele,i)=>{
                                              return <CartItem key={i} products={products} customer={customers} {...ele}/>                  
                                        })
                                      }

                                </TableRow>
                                </TableBody>
                                </Table>

                            </TableContainer>
                              
                            
                          
                    </Box>
                     </DialogContent>     
                 </Dialog>
        </div>
    )
}
export default BillForm