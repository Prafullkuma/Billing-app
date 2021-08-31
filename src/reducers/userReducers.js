import {ACCOUNT_INFO}  from '../actions/userAction'

const initailStateValue={}

const userReducers=(state=initailStateValue,action)=>{
     
    switch (action.type) {
         
        case ACCOUNT_INFO:{
            return action.payload
        }
        default:{
            return state
        }
     }
}
export default userReducers