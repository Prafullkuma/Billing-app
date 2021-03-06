import React, { useState } from 'react'
import AddUser from './AddUser'
import { registerAction } from '../../actions/userAction'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Box } from '@material-ui/core'
import './setBack.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));

const Register=(props)=>{
    const [isSaved,setIsSaved]=useState(false)
    const dispatch=useDispatch()
    const classes = useStyles();

    const formSubmission=(formData)=>{      
        
        const successMessage=()=>{
            Swal.fire({
                icon: 'success',
                text: 'Successfully registered'
            })
        }
        const setSavedDetails=()=>{
            setIsSaved(true)
        }
        
        dispatch(registerAction(formData,successMessage,setSavedDetails,props.history))  
    }
    const handleIsSaved=()=>{
        setIsSaved(!isSaved)
    }
    return(
        <div className="root">
            <Grid container>       
                <Grid item xs={12}>
                    <Box className={classes.paper} id="child">
                        <h1>REGISTER</h1><br/>
                        <AddUser formSubmission={formSubmission} isSaved={isSaved} handleIsSaved={handleIsSaved}/>
                    </Box>
                </Grid>
            </Grid>            
        </div>
    )
}
export default Register