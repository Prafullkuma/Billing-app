import axios from "axios"

export const registerAction=(formData,successMessage,setSavedDetails,movePageHandle)=>{

    return (dispatch)=>{
           axios.post(`http://dct-billing-app.herokuapp.com/api/users/register`,formData)
           .then((res)=>{
               const result=res.data
               if(result){
                  setSavedDetails()
                  successMessage()
                  movePageHandle()
               }     
           })
           .catch((err)=>{
               console.log(err)
           })
    }
}