import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import userReducers from '../reducers/userReducers'
import customersReducers from '../reducers/customersReducers'
import productsReducers from '../reducers/productsReducers'

const configureStore=()=>{

    const store=createStore(combineReducers({
        user:userReducers,
        customers:customersReducers,
        products:productsReducers
    }),applyMiddleware(thunk))

    return store
}
export default configureStore