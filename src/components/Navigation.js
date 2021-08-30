import React from 'react'
import {Link, Route,Switch  } from 'react-router-dom'
import { AppBar,Toolbar,Typography} from '@material-ui/core'


import Home from './Home'
import Register from './Register'
import Login from './Login'
import DashBoard from './DashBoard'
import Customers from './Customers'
const Navigation=({handleLoginStatus,isLoggedIn})=>{
   

    const LinkStyle={
        color:'white',
        margin:'12px',
        textDecoration:'none',
    }

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}}>
                    <Link style={LinkStyle} to="/">BILLING APP</Link>
                </Typography>
                    <Typography>
                        {
                            isLoggedIn ?
                            <>
                                <Link  style={LinkStyle} to="/dashboard">Dashboard</Link>   
                                <Link style={LinkStyle} to="/customers">Customers</Link>
                                <Link style={LinkStyle} to="/products">Products</Link>
                                <Link style={LinkStyle} to="/bills">Bills</Link>
                                <Link style={LinkStyle} to="/profile">Profile</Link>
                                
                                <Link style={LinkStyle} onClick={()=>{
                                    localStorage.removeItem('token')
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
                    isLoggedIn ?
                     <Switch>
                        <Route path="/dashboard" component={DashBoard} exact/>
                        <Route path="/customers" component={Customers} exact/>
                    </Switch>
                    :
                    <Switch>
                            <Route  path="/register" component={Register} exact/>
                            <Route path="/login" render={(props)=><Login handleLoginStatus={handleLoginStatus} {...props}/>} exact/>    
                    </Switch> 
                 }
                
            </Switch>
        </div>
    )
}
export default Navigation