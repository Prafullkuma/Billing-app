import React from 'react'
import DailyChart from './DailyChart'

const Graph=({allBills})=>{

    return(
        <div>
            <DailyChart allBills={allBills}/>
        </div>
    )
}
export default Graph