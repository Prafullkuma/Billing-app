import React from 'react'
import {Link, Route,Switch  } from 'react-router-dom'
import { AppBar,Toolbar,Typography} from '@material-ui/core'


import Home from './Home'
import Register from './Register'
import Login from './Login'


const Navigation=()=>{
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
                        <Link  style={LinkStyle} to="/">Home</Link> 
                        <Link  style={LinkStyle} to="/register">Register</Link>  
                        <Link  style={LinkStyle} to="Login">Login</Link>
                        <Link  style={LinkStyle} to="/dashboard">Dashboard</Link>   
                    </Typography>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/register" component={Register} exact/>
                <Route path="/login" component={Login} exact/>
            </Switch>
        </div>
    )
}
export default Navigation