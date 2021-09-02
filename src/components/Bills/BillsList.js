import React, { useEffect ,useState} from 'react'
import BillsListItems from './BillsListItem'
import {getAllBillsAction} from '../../actions/billsAction'
import { useDispatch ,useSelector} from 'react-redux'
import { Table,TableContainer,TableHead,TableRow ,TableBody,TableCell} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const BillsList=({customers,products})=>{
    
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    const classes = useStyles();

    useEffect(()=>{
         dispatch(getAllBillsAction())
    },[])

    const bills=useSelector((state)=>{
        return state.bills
    })

    useEffect(()=>{
       setData([...bills]) 
    },[bills])

    return(
        <div>
            <TableContainer style={{margin:'20px'}}>

                <h1>Bills List-{data.length}</h1>
                <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Sr No</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Bill created Date</TableCell>
                                <TableCell>View Product Details</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                                { 
                                    data.map((ele,i)=>{
                                            return <BillsListItems key={i} {...ele} srNo={i+1} customers={customers} products={products}/>
                                    })                 
                                }    
                        </TableBody>
                </Table>  
          </TableContainer> 
             
        </div>
    )
}
export default BillsList