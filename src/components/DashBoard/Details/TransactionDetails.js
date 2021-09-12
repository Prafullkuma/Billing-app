import React from 'react'
import DailyTransaction from './DailyTransaction'
import WeekTransaction from './Week/WeekTransaction'
import TopFive from './TopFiveCustomer/TopFive'
import  { Typography } from '@material-ui/core'
const TransactionDetails=({allCustomers,allBills,allProducts})=>{
    
    return(
        <div><br/>
            <Typography variant="h4" component="h4">
                Transaction Details 
            </Typography>
            <hr/>
            <hr/>
            <DailyTransaction allCustomers={allCustomers} allBills={allBills}/>
            <hr/><hr/>
            <WeekTransaction allBills={allBills} allCustomers={allCustomers}/>
            <hr/><hr/>
            <TopFive allCustomers={allCustomers} 
                     allBills={allBills} 
                     allProducts={allProducts}
                     />
        </div>
    )
}
export default TransactionDetails