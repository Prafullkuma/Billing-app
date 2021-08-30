import { ADD_PRODUCT } from '../actions/productsAction'
const initailStateValue=[]

const productsReducers=(state=initailStateValue,action)=>{
   
         switch(action.type){
            case ADD_PRODUCT:{
                return [action.payload,...state]
            }
            default:{
                return state
            }
         }
}
export default productsReducers