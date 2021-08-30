import React from 'react'
import {Paper,Grid,Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


import AddProducts from './AddProducts'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary
    }
}));

const Products=()=>{

    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                            <Typography variant="h4">Products</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <AddProducts/>
        </div>
    )
}
export default Products