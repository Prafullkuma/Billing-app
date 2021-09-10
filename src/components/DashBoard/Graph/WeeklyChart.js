import React ,{useState} from 'react'
import DateSelection from '../Details/Week/DateSelection'
import moment from 'moment'
import GetWeekChart from './GetWeekChart'
import { Typography } from '@material-ui/core'

const WeeklyChart=({allBills})=>{

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
              <Typography variant="h3" component="h3">
                     Weekly Chart
              </Typography>
              <hr/><hr/>
              <br/>
            <DateSelection formSubmission={formSubmission}/>
            <GetWeekChart weekInfo={weekInfo} allBills={allBills} />
        </div>
    )
}
export default WeeklyChart