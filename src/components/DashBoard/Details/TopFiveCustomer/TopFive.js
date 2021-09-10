import React from 'react'
import TopFiveList from './TopFiveList'

const TopFive =({allCustomers,allBills,allProducts})=>{
    
  return(
        <div style={{marginTop:'20px'}}>
            <h1>Top Five Customer</h1>
            <TopFiveList allBills={allBills} allCustomers={allCustomers}/>
        </div>
    )
}
export default TopFive