import React from 'react'
import {getDailyChartDetails} from './Helper'
import {LineChart ,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line} from 'recharts'

const GetWeekChartList=({selectedDateData})=>{

    const data=getDailyChartDetails(selectedDateData)
    
    
    return(
        <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
    )
}
export default GetWeekChartList