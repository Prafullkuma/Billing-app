import axios from 'axios'

export const ADD_CUSTOMER="ADD_CUSTOMER"

export const addCustomerAction=(formData,successMessage,setResetFormHandle)=>{

    return (dispatch)=>{
        axios.post(`http://dct-billing-app.herokuapp.com/api/customers`,formData,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
              const result=res.data 
              if(result){
                    successMessage()
                    dispatch({type:ADD_CUSTOMER,payload:result})
                    setResetFormHandle()
                }  
        }).catch((err)=>{
            alert(err.message)
        })
    }
}