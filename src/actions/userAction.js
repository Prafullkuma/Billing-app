import axios from "axios"


export  const ACCOUNT_INFO="ACCOUNT_INFO"

export const registerAction=(formData,successMessage,setSavedDetails,moveLink)=>{

    return (dispatch)=>{
           axios.post(`http://dct-billing-app.herokuapp.com/api/users/register`,formData)
           .then((res)=>{
               const result=res.data
               if(result.errors){
                   alert(result.message)
               }
               else if(result.errmsg){
                   alert(result.errmsg)
               }
               else{
                    setSavedDetails()
                    successMessage()
                    moveLink.push('/login')
                }             
           })
           .catch((err)=>{
               console.log(err)
               alert(err.message)
           })
    }
}
export const loginAction=(formData,moveLink,successMessage,errorMessage,handleLoginStatus)=>{
   
    return (dispatch)=>{
        axios.post(`http://dct-billing-app.herokuapp.com/api/users/login`,formData)
        .then((res)=>{
            const result=res.data

            if(result.errors){
                errorMessage(result)
            }
            else{
                localStorage.setItem('token',`Bearer ${result.token}`)
                successMessage()
                moveLink.push('/dashboard')
                handleLoginStatus()
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const accoutAction=()=>{

    return (dispatch)=>{

        axios.get(`http://dct-billing-app.herokuapp.com/api/users/account`,{
            headers:{
                 'Authorization':localStorage.getItem('token')
               }
          }
        )
        .then((res)=>{
            const result=res.data
            if(result){
                dispatch({type:ACCOUNT_INFO,payload:result})
            }
        })
        .catch(err =>{
            alert(err.message)
        })
    }
}