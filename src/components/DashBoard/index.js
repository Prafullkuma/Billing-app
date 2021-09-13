import React ,{useState,useEffect}from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {allCustomerListAction} from '../../actions/customersAction'
import {getAllProducts} from '../../actions/productsAction'
import {getAllBillsAction} from '../../actions/billsAction'
import {accoutAction} from '../../actions/userAction'

import {Container} from '@material-ui/core'


import { makeStyles } from '@material-ui/core/styles';
import Profile from './Profile'
import HeaderList from './HeaderList'
import TabsComponent from './TabsComponent'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:'30px'
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
          dispatch(accoutAction())
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
              <HeaderList totalAmount={totalAmount} 
                    allCustomers={allCustomers}
                    allBills={allBills}
                    allProducts={allProducts}
                    classes={classes}
              />
              <TabsComponent 
                   allCustomers={allCustomers}
                   allBills={allBills}
                   allProducts={allProducts}
              />
              
             
          </Container>
        </div>
    )
}
export default DashBoard