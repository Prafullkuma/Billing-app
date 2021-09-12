import React from 'react'
import {GetWeek}  from '../Helper'
import { TableCell, 
    TableContainer, 
    TableRow ,
    TableHead,
    Table,
    TableBody} from '@material-ui/core'
import GetWeekDeatails from './GetWeekDeatails'
import  {getTotalAmount} from '../Helper'

const GetWeekData=({weekInfo,allBills,allCustomers})=>{
     const data= GetWeek(weekInfo[0],weekInfo[1],allBills)

    return(
        <div style={{margin:'20px'}}>

        <TableContainer>

          {data.length===0?
               <div style={{textAlign:'center'}}>

                        <img src="https://icons8.com/preloaders/preloaders/1474/Walk.gif" alt="loaded"/>
                        <h1>Select the date</h1>
                </div>
              :
            <> 
             <h1>Today Transaction-{data.length}</h1>
                 <br/>
               <h4>Final Amout:{getTotalAmount(data)}</h4>
                  
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
                                     data.map((ele,i)=>{
                                         return <GetWeekDeatails key={i} {...ele} allCustomers={allCustomers}/>     
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
export default GetWeekData