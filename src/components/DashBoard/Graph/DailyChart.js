import React from 'react'
import DailyChartItem from './DailyChartItem'

import {getDailyChartDetails} from './Helper'
import WeeklyChart from './WeeklyChart'
const DailyChart=({allBills})=>{

    const data=getDailyChartDetails(allBills)
    
    return(
        <div>
            <DailyChartItem data={data}/>
            <WeeklyChart  allBills={allBills}/>
        </div>
    )
}
export default DailyChart