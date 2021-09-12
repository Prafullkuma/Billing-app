import React, { useState,useEffect } from 'react'
import moment from 'moment'
import DailyTransactionDetails from './DailyTransactionDetails'

const DailyTransaction=({allCustomers,allBills})=>{          
      const [todayTransaction,setTodayTransaction]=useState([])    
      var localTime = moment().format('YYYY-MM-DD'); 
      var proposedDate = localTime + "T00:00:00.000Z";
      useEffect(()=>{
        const result=allBills.filter((ele)=>{
            return ele.date===proposedDate
        })
        setTodayTransaction(result)
      },[proposedDate,allBills]) 
      
    return(
        <div>
            <DailyTransactionDetails 
                todayTransaction={todayTransaction}
                allCustomers={allCustomers} 
            />
        </div>
    )
}
export default DailyTransaction