import React from 'react'
import {
    TableRow,
    TableCell
   } from '@material-ui/core'

import {GetCustomerName} from '../Helper'

const GetWeekDeatails=({customer,total,allCustomers})=>{

    return(
        <TableRow>
             <TableCell>{customer && GetCustomerName(customer,allCustomers).name}</TableCell>
             <TableCell>{customer && GetCustomerName(customer,allCustomers).mobile}</TableCell>
            <TableCell>{total}</TableCell>
       </TableRow>
    )
}
export default GetWeekDeatails