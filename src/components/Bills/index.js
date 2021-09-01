import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {allCustomerListAction} from '../../actions/customersAction'
import {getAllProducts}  from '../../actions/productsAction'
import AddBill from './AddBill'

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
            <h1>{customers.length}
                              and 
                {products.length}
            </h1>
            <AddBill customers ={customers}
                     products={products}
            />
        </div>
    )
}
export default Bills