import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store/configureStore'

import App from './App'
import './index.css'
import { Provider } from 'react-redux'

const store=configureStore()

// console.log("before update",store.getState())

// store.subscribe(()=>{
//     console.log("after update",store.getState())
// })

ReactDOM.render(
        <BrowserRouter>
            <Provider  store={store}>
                <App/>  
            </Provider>
        </BrowserRouter>
,document.getElementById('root'))