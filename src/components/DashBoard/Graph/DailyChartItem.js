import React from 'react'
import {BarChart,CartesianGrid,XAxis,Tooltip,YAxis,Legend,Bar} from 'recharts'
import {Typography} from '@material-ui/core'

const DailyChartItem=({data})=>{

     return(
         <div style={{margin:'30px'}}>
              <Typography variant="h3" component="h3">
                    Daily Chart
              </Typography>
              <hr/><hr/>
              <br/>
              <br/>
             <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
            
         </div>
     )
}
export default DailyChartItem