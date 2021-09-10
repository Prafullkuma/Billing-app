import React from 'react'
import DailyTransaction from './DailyTransaction'
import WeekTransaction from './Week/WeekTransaction'
import TopFive from './TopFiveCustomer/TopFive'

const TransactionDetails=({allCustomers,allBills,allProducts})=>{
    
    return(
        <div>
            <h1>TransactionDetails Page</h1>
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