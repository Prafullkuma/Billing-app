import axios from 'axios'

export const addBillsAction=(formData)=>{
    
    return (dispatch)=>{
        axios.post(`http://dct-billing-app.herokuapp.com/api/bills`,formData,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            console.log(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const getAllBillsAction=()=>{
    return (dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills`,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result){
                dispatch({type:'ALL_BILLS',payload:result})
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}