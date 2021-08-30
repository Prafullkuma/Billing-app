import React from 'react'
import {Link} from 'react-router-dom'
import { DateTime } from "luxon";
const CustomersListItem=({_id,name,mobile,email,createdAt})=>{
    
    return(
        <tr>
            <td>{name}</td>
            <td>{mobile}</td>
            <td>{email}</td>
            <td>{DateTime.fromISO(createdAt)}</td>
            <td> <Link to="/customers/:id">View</Link></td>  
            <td> <Link to="/customers/:id">Edit</Link></td>
            <td> <Link to="/customers/:id">Delete</Link></td>
        </tr>
    )


}
export default CustomersListItem