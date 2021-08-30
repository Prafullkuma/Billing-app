import React from 'react'
import { useSelector } from 'react-redux'
import CustomersListItem from './CustomersListItem' 
const CustomersList=()=>{

    const customers=useSelector((state)=>{
        return state.customers
    })

    return(
        <div>
            <h1>customer-{customers.length}</h1>
            {
                customers.length===0 ?
                 <div>
                     <h1>Add Your first customer</h1>
                 </div>
                 :
                 <table>
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                     </thead>
                     <tbody>

                     </tbody>

                 </table>
                     
            
            }
        </div>
    )
}
export default CustomersList