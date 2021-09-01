import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import {Paper,Grid,Typography} from '@material-ui/core'
import AddCustomer from './AddCustomer'

import CustomersList from './CustomersList'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary
    }
  }));

const Customers=()=>{
    const classes = useStyles();
    return(
        <div>
            <Grid container >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                             <Typography variant="h4">Customer</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                      <Paper className={classes.paper}>
                      <CustomersList/>
                      </Paper>
                </Grid>
                <Grid item xs={3} spacing={2}>
                    <Paper className={classes.paper}>
                           <AddCustomer/>
                    </Paper>
                </Grid>

            </Grid>
    
        </div>  
    )
}
export default Customers