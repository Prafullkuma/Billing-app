import React from 'react'
import LoginUser from './LoginUser'
import Swal from 'sweetalert2'

import { loginAction } from '../../actions/userAction'

import { useDispatch } from 'react-redux'
import { Grid,Box} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
       },
  }));


const Login=(props)=>{
    const { handleLoginStatus }=props
    const dispatch=useDispatch()

    const classes = useStyles();

    const formSubmission=(formData)=>{
        const successMessage=()=>{
            Swal.fire({
                icon: 'success',
                text: 'Successfully LoggedIn'
            })
        }
        const errorMessage=(error)=>{
            Swal.fire({
                icon:'error',
                text:error.errors
            })
        }
        dispatch(loginAction(formData, props.history ,successMessage,errorMessage,handleLoginStatus))
    }

    return(
        <div className="root">
            <Grid container >       
                <Grid item xs={12}>
                    <Box className={classes.paper} id="child">
                        <h1>LOGIN</h1><br/>
                        <LoginUser formSubmission={formSubmission}/> 
                    <hr style={{margin:'10px'}}/>
                    <p style={{color:'black',margin:'10px'}}>Login Details: Email:google@gmail.com and password:googledata</p>
                    </Box>

                </Grid>

            </Grid>  
        </div>
    )
}
export default Login