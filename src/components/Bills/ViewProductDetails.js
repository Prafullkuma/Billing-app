import React ,{ useEffect, useState }from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import moment from 'moment'
import ReactTOPdf from "react-to-pdf";


import {Box,TableBody,Button,TableHead,TableRow,Typography,Table,TableCell } from '@material-ui/core'

const ViewProductDetails=({_id,customers,products})=>{
      
    const [aBill,setABill]=useState({})
    const ref = React.createRef();

    const user=useSelector((state)=>{
        return state.user
    })
     useEffect(()=>{
        if(_id){
            axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${_id}`,{
                headers:{
                    'Authorization':localStorage.getItem('token')
                }
            })
            .then((res)=>{
                const result=res.data
                setABill(result)
            })
            .catch((err)=>{
                
            })
        }

     },[_id])

     const getNameOfCustomer=(_id)=>{
        const result=customers.find((ele)=>{
            if(ele._id===_id){
                return {cName:ele.name}
            }
        })
        if(Object.keys(result).length !==0){
            return result
        }        
     }
     //Product detail
     const getProductsDetails=(id)=>{
        const result=products.find((ele)=>{
             return ele._id===id
        })
        if(Object.keys(result).length !==0){
            return result.name
        }
     }
     
     const getParsedDate=(date)=>{
          const result=moment.utc(date)
          const da=result._d.toString()
          const Index=da.indexOf('G')  
          const result1= da.slice(0,Index)  
          return result1
     }
     
    return(
        <>
        <Box component="span" m={1}>
           {
               Object.keys(aBill).length !==0
                &&
                <div ref={ref}>
                    <Typography>Customer Name : {getNameOfCustomer(aBill.customer).name}</Typography>
                    <Typography>Date : { getParsedDate(aBill.date)}</Typography>
                    <Typography>Customer Name : {getNameOfCustomer(aBill.customer).mobile}</Typography>
                    <hr/>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product name</TableCell>
                                <TableCell>Product Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>SubTotal</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { aBill.lineItems.map((ele)=>{
                                 return <TableRow key={ele._id}>
                                            <TableCell>{getProductsDetails(ele.product)}</TableCell>
                                            <TableCell>{ele.price}</TableCell>
                                            <TableCell>{ele.quantity}</TableCell>
                                            <TableCell>{ele.subTotal}</TableCell>
                                       </TableRow>   
                             })}
                        </TableBody>
                    </Table>
                    <hr/> 
                    <h2>Total-{aBill.total}</h2>
                    <br/>
                    <h3>Generated By-{user !==undefined && user.username}</h3>
                     <h4>created Date-{getParsedDate(aBill.createdAt)}</h4>        
                </div>
           }
        </Box>
           <div>
           <ReactTOPdf targetRef={ref} >
                {({ toPdf }) => 
                    <Button onClick={toPdf} variant="contained" color="secondary"  color="primary">
                       Download
                   </Button>
                 }
         </ReactTOPdf>
               
            </div> 
        
        </>
    )
}
export default ViewProductDetails