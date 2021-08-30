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
                 <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Created Date</th>
                            <th>Show</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                     </thead>
                     <tbody>
                         {customers.map((ele)=>{
                             return <CustomersListItem key={ele._id} {...ele}/>
                         })} 
                     </tbody>
                 </table>
                     
            
            }
        </div>
    )
}
export default CustomersList