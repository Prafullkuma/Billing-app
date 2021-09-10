import React,{useEffect} from 'react'

import {Link, Route,Switch,withRouter  } from 'react-router-dom'
import { AppBar,Toolbar,Typography,} from '@material-ui/core'
import { accoutAction } from '../actions/userAction'


import { useDispatch} from 'react-redux'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import DashBoard from './DashBoard'
import Customers from './Customers'
import Products from './Products'
import Bills from './Bills'
import PageNotFound from './PageNotFound'

const Navigation=(props)=>{
    const {handleLoginStatus}=props

    const localVAr=localStorage.getItem('token') ||  false

    const dispatch=useDispatch()

    const LinkStyle={
        color:'white',
        margin:'12px',
        textDecoration:'none',
    }
      useEffect(()=>{
          if(localStorage.getItem('token')){
            dispatch(accoutAction())
          }
      },[dispatch])
      
 
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}}>
                    
                     <Link style={LinkStyle} to="/">BILLING APP</Link>
                
                </Typography>
                    <Typography>
                        {
                            localVAr ?
                            <>
                                <Link  style={LinkStyle} to="/dashboard">Dashboard</Link>    
                                <Link style={LinkStyle} to="/customers">Customers</Link>
                                <Link style={LinkStyle} to="/products">Products</Link> 
                                <Link style={LinkStyle} to="/bills">Bills</Link>
                                  
                                <Link style={LinkStyle} onClick={()=>{
                                    localStorage.removeItem('token')
                                    props.history.push('/')
                                    handleLoginStatus()
                                }}to="#">Logout</Link>
                            </>
                            :
                            <>        
                                <Link  style={LinkStyle} to="/">Home</Link> 
                                <Link  style={LinkStyle} to="/register">Register</Link>  
                                <Link  style={LinkStyle} to="Login">Login</Link>   
                            </>
                        }
                    </Typography>
                </Toolbar>            
            </AppBar>
            <Switch>
               <Route path="/" component={Home} exact/>      
                {
                    localVAr ?
                     <Switch>
                        <Route path="/dashboard" component={DashBoard} exact/> 
                        <Route path="/customers" component={Customers} exact/>
                        <Route path="/products" render={(props)=><Products {...props}/> } exact/>
                        <Route path="/bills" component={Bills} exact/>  
                        <Route component={PageNotFound} />
                    </Switch>
                    :
                    <Switch>
                            <Route  path="/register" component={Register} exact/>
                            <Route path="/login" render={(props)=><Login handleLoginStatus={handleLoginStatus} {...props}/>} exact/>    
                            <Route component={PageNotFound} />
                    </Switch> 
                 }
            </Switch>
        </div>
    )
}
export default withRouter(Navigation) 