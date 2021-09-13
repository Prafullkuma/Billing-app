import React from 'react'

import { TableCell, 
    TableContainer, 
    TableRow ,
    TableHead,
    Table,
    TableBody} from '@material-ui/core'

import {topFiveCustomers} from '../Helper'
import {GetCustomerName}  from '../Helper'
const TopFiveList=({allBills,allCustomers})=>{
    
    const data=topFiveCustomers(allBills) || []

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.length !==0 &&

                      data
                      .slice(0,5)
                      .map((ele,i)=>{
                          return (
                              <TableRow key={i}>
                                 <TableCell>{ele.customer && GetCustomerName(ele.customer,allCustomers).name}</TableCell> 
                                <TableCell>{ele.total}</TableCell>
                              </TableRow>
                          )
                      })
                    }
                </TableBody>

            </Table>
        </TableContainer>

    )
}
export  default TopFiveList