import React from 'react'
import { GetWeek } from './Helper'
import GetWeekChartList from './GetWeekChartList'

const GetWeekChart=({weekInfo,allBills})=>{
    const result=GetWeek(weekInfo[0],weekInfo[1],allBills)

    return(
        <div>
             {weekInfo.length===0 ?
                 <div style={{textAlign:'center'}}>

                        <img src="https://icons8.com/preloaders/preloaders/1474/Walk.gif" alt="loaded"/>
                        <h1>Select start and end date</h1>
                </div>
              :
              <>
              <hr/><hr/>
                 <GetWeekChartList selectedDateData={result}/>
              </>  
             }
        </div>
    )
}
export default GetWeekChart