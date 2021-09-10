import React from 'react'
import {
    TableRow,
    TableCell
   } from '@material-ui/core'

import {GetCustomerName} from '../Helper'

const GetWeekDeatails=({customer,total,allCustomers})=>{

    return(
        <TableRow>
             <TableCell>{GetCustomerName(customer,allCustomers).name}</TableCell>
             <TableCell>{GetCustomerName(customer,allCustomers).mobile}</TableCell>
              <TableCell>{total}</TableCell>
       </TableRow>
    )
}
export default GetWeekDeatails