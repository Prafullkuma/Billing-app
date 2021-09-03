import React, { useEffect ,useState} from 'react'
import BillsListItems from './BillsListItem'
import {getAllBillsAction} from '../../actions/billsAction'
import { useDispatch ,useSelector} from 'react-redux'
import { Table,TableContainer,Typography,TablePagination,TableHead,TableRow,TableBody,TableCell} from '@material-ui/core'
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

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [searchTerm,setSearchTerm]=useState('')

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
    //Pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };    

      const handleSearchChange=(e)=>{
            const result=e.target.value
            setSearchTerm(result)
            filteredResult(result)
      }
      const filteredResult=(term)=>{
        // const result=customers.filter((ele)=>{
        //      return ele.name.toLowerCase().includes(term.toLowerCase())
        // }).map((ele)=>{
        //     return ele._id
        // })
    }
    return(
        <div>
            <TableContainer style={{margin:'20px'}}>
                <h1>Bills List-{data.length}</h1>
                <br/><br/>
                <label id="orderBy">Order By</label>
                <select htmlFor="orderBy" value={selectTerm} onChange={handleChange}>
                  <option value="">Order By</option>  
                  <option value="asc">Price Asc</option>
                  <option value="desc"> Price Desc</option>
                </select>   
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
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((ele,i)=>{
                                            return <BillsListItems key={i} {...ele} srNo={i+1} customers={customers} products={products}/>
                                    })                 
                                }    
                        </TableBody>
                </Table>  
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            
          </TableContainer> 
          
             
        </div>
    )
}
export default BillsList