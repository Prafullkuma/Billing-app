import axios from 'axios'
export const  ADD_BILL="ADD_BILL"
export const  ALL_BILLS="ALL_BILLS"
export const DELETE_BILL="DELETE_BILL"

export const addBillsAction=(formData,addBillsAction)=>{
    
    return (dispatch)=>{
        axios.post(`http://dct-billing-app.herokuapp.com/api/bills`,formData,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            dispatch({type:ADD_BILL,payload:result})
            addBillsAction()
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
                dispatch({type:ALL_BILLS,payload:result})
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const deleteBillsAction=(_id)=>{
    return (dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${_id}`,{
            headers:{
                'Authorization':localStorage.getItem('token') 
            }
        })
        .then((res)=>{
            const result=res.data
            if(result){
                dispatch({type:DELETE_BILL,payload:result})
            }
        }) 
        .catch((err)=>{
            alert(err.message)
        })
    }
}
