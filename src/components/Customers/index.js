import React from 'react'
import AddCustomer from './AddCustomer'
import CustomersList from './CustomersList'

const Customers=()=>{
    
    return(
        <div>
            <h1>Customer</h1>
             <CustomersList/>
             <AddCustomer/>
        </div>  
    )
}
export default Customers