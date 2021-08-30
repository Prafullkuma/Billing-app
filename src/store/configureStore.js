import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import userReducers from '../reducers/userReducers'
import customersReducers from '../reducers/customersReducers'
const configureStore=()=>{

    const store=createStore(combineReducers({
        user:userReducers,
        customers:customersReducers
    }),applyMiddleware(thunk))

    return store
}
export default configureStore