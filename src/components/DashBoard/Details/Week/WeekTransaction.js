import React,{useState} from 'react'
import DateSelection from './DateSelection'
import moment from 'moment'
import GetWeekData from './GetWeekData'
const WeekTransaction=({allBills,allCustomers})=>{
    const [weekInfo,setWeekInfo]=useState([])

    const formSubmission=(formData)=>{
        let localTime = moment().format(formData.startDate); // store localTime
        let proposedDate = localTime + "T00:00:00.000Z";

        let localTime2=moment().format(formData.endDate)
        let proposedDate2 = localTime2 + "T00:00:00.000Z";

        setWeekInfo([proposedDate,proposedDate2])
    }
    
    return(
        <div>   
            <h1 style={{margin:'20px'}}> Week Transaction</h1>  
            <DateSelection  formSubmission={formSubmission}/> 
            <GetWeekData weekInfo={weekInfo} allBills={allBills} allCustomers={allCustomers}/>

        </div>
    )
}
export default WeekTransaction