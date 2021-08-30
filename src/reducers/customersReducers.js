
import {ADD_CUSTOMER,ALL_CUSTOMER,DELETE_CUSTOMER,EDIT_CUSTOMER} from '../actions/customersAction'

const initialStateValue=[]

const customersReducers=(state=initialStateValue,action)=>{

    switch(action.type){
         case ADD_CUSTOMER:{
            return [action.payload,...state] 
         }
         case ALL_CUSTOMER:{
             return action.payload
         }
         case DELETE_CUSTOMER:{
             return state.filter((ele)=>{
                return ele._id !== action.payload._id 
             })
         }
         case EDIT_CUSTOMER:{
             return state.map((ele)=>{
                 if(ele._id===action.payload._id){
                     return {...ele,...action.payload.formData}
                 }else{
                     return {...ele}
                 }
             })
         }
        default:{
            return state
        }
    }
}
export default customersReducers