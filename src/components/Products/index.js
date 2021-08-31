import React from 'react'
import {Paper,Grid,Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


import AddProducts from './AddProducts'
import ProductsList from './ProductsList'


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
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                            <Typography variant="h4">Products</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                      <Paper className={classes.paper}>
                         <ProductsList/>
                    </Paper>
                </Grid>
                <AddProducts/>
            </Grid>

        </div>
    )
}
export default Products