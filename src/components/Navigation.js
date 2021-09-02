import React,{ useState,useEffect} from 'react'

import {Link, Route,Switch,withRouter  } from 'react-router-dom'
import { AppBar,Toolbar,Typography, Button} from '@material-ui/core'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { accoutAction } from '../actions/userAction'


import { useDispatch ,useSelector} from 'react-redux'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import DashBoard from './DashBoard'
import Customers from './Customers'
import Products from './Products'
import Bills from './Bills'

const Navigation=(props)=>{
    const {handleLoginStatus,isLoggedIn}=props
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch=useDispatch()

    const LinkStyle={
        color:'white',
        margin:'12px',
        textDecoration:'none',
    }
      //for Profile
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      //Profile

      useEffect(()=>{
          if(localStorage.getItem('token')){
            dispatch(accoutAction())
          }
      },[dispatch])
      
      const user=useSelector((state)=>{
        return state.user
      })

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
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    Profile
                                </Button>   
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
                
                   <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                     >
                    <MenuItem >{user && user.username}</MenuItem>
                    <MenuItem >{user && user.email}</MenuItem>
                    <MenuItem >{user && user.businessName}</MenuItem>
                    <MenuItem>{user && user.address}</MenuItem>
                    
                    </Menu> 
            </AppBar>
            <Switch>
                {/* <Route path="/" component={Home} exact/> */}
                {
                    isLoggedIn ?
                     <Switch>
                        {/* <Route path="/dashboard" component={DashBoard} exact/>
                        <Route path="/customers" component={Customers} exact/>
                        <Route path="/products" component={Products} exact/>  */}
                        <Route path="/bills" component={Bills} exact/>
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
export default withRouter(Navigation) 