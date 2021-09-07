import React ,{useState,useEffect}from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {allCustomerListAction} from '../../actions/customersAction'
import {getAllProducts} from '../../actions/productsAction'
import {getAllBillsAction} from '../../actions/billsAction'
import {Grid,Paper,Container} from '@material-ui/core'


import { makeStyles } from '@material-ui/core/styles';
import Profile from './Profile'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const DashBoard=()=>{
      const [profile,setProfile]=useState({})
      const [allCustomers,setAllCustomers]=useState([])
      const [allProducts,setAllProducts]=useState([])
      const [allBills,setAllBills]=useState([])

      const classes = useStyles();
      const dispatch=useDispatch()

      const {user, customers,products,bills}=useSelector((state)=>{
        return state
      })

      useEffect(()=>{
          dispatch(allCustomerListAction())
          dispatch(getAllProducts())
          dispatch(getAllBillsAction())
      },[dispatch])

      useEffect(()=>{
          setProfile(user)
          setAllCustomers([...customers])
          setAllProducts([...products])
          setAllBills([...bills])
      },[user,customers,products,bills])

      const totalAmount=()=>{
        let sum=0 
        bills.forEach((ele)=>{
          sum+=ele.total
        })
        return sum
      }


    return(
        <div className={classes.root} >
          <br/>
          <Profile  profile={profile}/>  
          <br/>
            <Container maxWidth="lg" style={{marginTop:'50px'}}>
                <Grid container>
                      <Grid item xs={3} sm={3} >
                        <Paper className={classes.paper}>
                        Customers  <br/><br/>
                            {allCustomers.length}
                          </Paper>
                      </Grid>
                      <Grid item xs={3} sm={3}>
                        <Paper className={classes.paper}>
                        Products <br/> <br/>
                            {allProducts.length}
                        </Paper>
                      </Grid>
                      <Grid item xs={3} sm={3}>
                        <Paper className={classes.paper}>
                        Bills <br/><br/>
                          {allBills.length}
                        </Paper>
                      </Grid>
                      <Grid item xs={3} sm={3}>
                        <Paper className={classes.paper}>
                        Amount <br/><br/>
                          {totalAmount()}
                        </Paper>
                      </Grid>
                </Grid>
          </Container>
        </div>
    )
}
export default DashBoard