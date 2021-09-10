import React from 'react'
import DailyTransactionDetailsItem from './DailyTransactionDetailsItem'
import { TableCell, 
         TableContainer, 
         TableRow ,
         TableHead,
         Table,
         TableBody} from '@material-ui/core'

import {getTotalAmount} from './Helper'

const DailyTransactionDetails=({todayTransaction,allCustomers})=>{

    return(
        <div style={{margin:'20px'}}>

           <TableContainer>

             {todayTransaction.length===0?
                 <h1> No Transaction for today</h1>
               :
               <> 
                <h1>Today Transaction-{todayTransaction.length}</h1>
                    <br/>
                  <h4>Final Amout:{getTotalAmount(todayTransaction)}</h4>
                     
                     <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Customer Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                        todayTransaction.map((ele,i)=>{
                                            return <DailyTransactionDetailsItem key={i} {...ele} allCustomers={allCustomers}/>     
                                        })
                                }
                                <TableRow>

                                    </TableRow>
                            </TableBody>

                    </Table>
               </>
            }
            </TableContainer> 
        </div>
    ) 
    
}
export default DailyTransactionDetails