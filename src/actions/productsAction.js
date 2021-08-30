import axios from 'axios'
export const ADD_PRODUCT="ADD_PRODUCT"

export const addProductsAction=(formData,successMessage,setResetFormHandle)=>{

    return (dispatch)=>{
        axios.post(`http://dct-billing-app.herokuapp.com/api/products`,formData,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result){
                dispatch({type:ADD_PRODUCT,payload:result})
                successMessage()
                setResetFormHandle()
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}