import React from 'react'
import { useSelector } from "react-redux";
import { Paper ,Typography}from '@material-ui/core'
const UserProfile=()=>{
    
    const user=useSelector((state)=>{
        return state.user
    })

    return(
        <div style={{textAlign:'center',marginTop:'100px'}}>  
            <Paper style={{margin: 'auto',maxWidth: 500,}}>   
                 <Typography  variant="h5">
                     User info
                 </Typography>
                 <br/><br/>
                 <Typography style={{color:'blue'}}fontFamily="fontFamily" variant="h6">
                     
                     Name-{user.username}<br/>
                     Email:{user.email} <br/>
                     business Name:{user.businessName}<br/>
                     Address: {user.address} <br/>
                     Registerd:{user.createdAt}  
                 </Typography>
                   
            </Paper>   
        </div>
    )
}
export default UserProfile