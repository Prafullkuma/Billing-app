import React from 'react'
import DailyTransaction from './DailyTransaction'
import WeekTransaction from './Week/WeekTransaction'

const TransactionDetails=({allCustomers,allBills,allProducts})=>{
    
    return(
        <div>
            <h1>TransactionDetails Page</h1>
            <hr/>
            <hr/>
            <DailyTransaction allCustomers={allCustomers} allBills={allBills}/>
            <hr/>
            <hr/>
            <WeekTransaction allBills={allBills} allCustomers={allCustomers}/>
        </div>
    )
}
export default TransactionDetails