import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {allCustomerListAction} from '../../actions/customersAction'
import {getAllProducts}  from '../../actions/productsAction'
import AddBill from './AddBill'
import BillsList from './BillsList'

import {Grid,Paper} from '@material-ui/core'

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
        <div>  
            <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                 <BillsList/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper style={{textAlign:"center"}} >
                    <AddBill customers ={customers}
                            products={products}
                    />
                </Paper>
            </Grid>

            </Grid>

        </div>
    )
}
export default Bills