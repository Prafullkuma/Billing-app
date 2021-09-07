import React, { useEffect ,useState} from 'react'
import BillsListItems from './BillsListItem'
import {getAllBillsAction} from '../../actions/billsAction'
import { useDispatch ,useSelector} from 'react-redux'
import { Table,TableContainer,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const BillsList=({customers,products})=>{
    
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    const [selectTerm,setSelectTerm]=useState('')


    const [searchTerm,setSearchTerm]=useState('')

    const classes = useStyles();

    useEffect(()=>{
         dispatch(getAllBillsAction())
    },[dispatch])

    const bills=useSelector((state)=>{
        return state.bills
    })

    useEffect(()=>{
       setData([...bills]) 
    },[bills])

    const handleChange=(e)=>{
        const result=e.target.value
        setSelectTerm(result)
        sortData(result)
    }

    const sortData=(term)=>{
        if(term==="asc"){
            const result=data.sort((a,b)=>a.total-b.total)
            setData(result)
        }else{
            const result=data.sort((a,b)=>b.total-a.total)
            setData(result)
        }
    }

      //Searching 

      const handleSearchChange=(e)=>{
            const result=e.target.value
            setSearchTerm(result)
            filterData(result)     
      }
      const filterData=(query)=>{
          let finalResult=[]  
        const result=customers.filter((ele)=>{
              return ele.name.toLowerCase().includes(query.toLowerCase())
        })
        result.forEach((ele)=>{
            const result=bills.filter((e=>e.customer===ele._id))
            finalResult=finalResult.concat(result)
        })
        setData(finalResult)
      }
      
    return(
        <div>
            <TableContainer style={{margin:'20px'}}>
                <h1>Bills List-{data.length}</h1>
                <br/><br/>
                <label id="orderBy">Order By</label>

                <select htmlFor="orderBy" style={{margin:'10px'}} value={selectTerm} onChange={handleChange}>
                  <option value="">Order By</option>  
                  <option value="asc">Price Asc</option>
                  <option value="desc"> Price Desc</option>
                </select>

                 <input type="text" value={searchTerm} placeholder="Enter name to search" onChange={handleSearchChange}/><br/>

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
                                    data
                                    .map((ele,i)=>{
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