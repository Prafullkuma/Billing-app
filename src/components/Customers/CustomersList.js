import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Typography ,List} from '@material-ui/core'

import CustomersListItem from './CustomersListItem' 
import {allCustomerListAction} from '../../actions/customersAction'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
  
const CustomersList=()=>{

    const dispatch=useDispatch()
    const classes = useStyles();

    useEffect(()=>{
        dispatch(allCustomerListAction())
    },[dispatch])

    const customers=useSelector((state)=>{
        return state.customers
    })

    return(
        <div>
            <Typography variant="h4" className={classes.title}>
                     Customer-{customers.length}
            </Typography>

            {
                customers.length===0 ?
                 <div>
                     <Typography variant="h4"  className={classes.title}>
                         Add Your first customer
                    </Typography>
                 </div>
                 :
                <List>
                    {customers.map((ele)=>{
                        return <CustomersListItem key={ele._id} {...ele}/>
                    })}
                </List> 
            }
        </div>
    )
}
export default CustomersList