import { ADD_BILL,ALL_BILLS,DELETE_BILL} from '../actions/billsAction'

const initialStateValue=[]

const billsReducers=(state=initialStateValue,actions)=>{

    switch(actions.type){
        case ADD_BILL:{
            return [actions.payload,...state]
        }
        case ALL_BILLS:{
            return actions.payload
        }
        case DELETE_BILL:{
            return state.filter((ele)=>{
               return ele._id !== actions.payload._id   
            })
        }
        default:{
            return [...state]
        }
    }
}
export default billsReducers