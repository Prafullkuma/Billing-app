import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {allCustomerListAction} from '../../actions/customersAction'
import {getAllProducts}  from '../../actions/productsAction'
import AddBill from './AddBill'
import BillsList from './BillsList'

import {Grid,Box} from '@material-ui/core'


const Bills =()=>{
   

    const dispatch=useDispatch()
    const {customers,products}=useSelector((state)=>{
        return state
    })

    useEffect(()=>{
        dispatch(allCustomerListAction())
        dispatch(getAllProducts())
    },[dispatch])


    return(
        <div style={{margin:'20px'}}>  
            <Grid container >
             <Grid item xs={12} sm={8}>
                 <BillsList customers={customers} products={products} />                 
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box style={{textAlign:"center"}} >
                    <AddBill customers ={customers}
                            products={products}
                    />
                </Box> 
            </Grid>
            </Grid>

        </div>
    )
}
export default Bills