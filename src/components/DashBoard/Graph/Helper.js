import _ from 'lodash'

export const getDailyChartDetails=(allBills)=>{
    const uniqDate=_.unionBy(allBills,'date')
    const result=uniqDate.map((el)=>{
        let sum=0
        allBills.forEach((ele)=>{
            if(el.date===ele.date){
                sum+=ele.total
            }
        })
        return {label:el.date.slice(0,el.date.indexOf('T')),price:sum}
    })
    return result
}

export const GetWeek=(startDate,endDate,arr)=>{
    const result=arr.filter((ele)=>{
         return startDate <= ele.date && ele.date<=endDate  
    })
    return result
}

