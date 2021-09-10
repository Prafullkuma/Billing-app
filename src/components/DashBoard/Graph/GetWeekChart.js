import React from 'react'
import { GetWeek } from './Helper'
import GetWeekChartList from './GetWeekChartList'
import {Typography} from '@material-ui/core'

const GetWeekChart=({weekInfo,allBills})=>{
    const result=GetWeek(weekInfo[0],weekInfo[1],allBills)

    return(
        <div>
             {weekInfo.length===0 ?
                <Typography variant="h5" component="h3">
                     Your not select any Date
                </Typography>
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