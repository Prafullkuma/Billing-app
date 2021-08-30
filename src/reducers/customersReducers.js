
import {ADD_CUSTOMER} from '../actions/customersAction'

const initialStateValue=[]

const customersReducers=(state=initialStateValue,action)=>{

    switch(action.type){
         case ADD_CUSTOMER:{
            return [action.payload,...state] 
         }
        default:{
            return state
        }
    }
}
export default customersReducers