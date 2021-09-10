
export const GetCustomerName=(id,arr)=>{
    const result=arr.find((ele)=>{
             return ele._id===id       
    })
    return result
}

export const getTotalAmount=(arr)=>{
     let sum=0
         arr.forEach((ele)=>{
             sum+=ele.total
         })
     return sum
}
 
export const GetWeek=(startDate,endDate,arr)=>{
    const result=arr.filter((ele)=>{
         return startDate <= ele.date && ele.date<=endDate  
    })
    return result
}
export const topFiveCustomers=(arr)=>{
    return arr.sort((a,b)=>{
        return b.price-a.price
    })
}
