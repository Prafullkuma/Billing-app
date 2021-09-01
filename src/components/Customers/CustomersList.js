import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {TextField ,TablePagination,TableContainer,Table,TableRow,TableBody,Box, TableCell, TableHead}  from '@material-ui/core'

import CustomersListItem from './CustomersListItem' 
import {allCustomerListAction,deleteCustomerAction,editCustomerAction} from '../../actions/customersAction'

const useStyles = makeStyles({
    table: {
      minWidth: 150,
    },
});
  
const CustomersList=()=>{

    const [order,setOrder]=useState('')
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')

    const [changed,setChanged]=useState(false)


    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const dispatch=useDispatch()
    const classes = useStyles();

    useEffect(()=>{
        dispatch(allCustomerListAction())
    },[dispatch])

    const customers=useSelector((state)=>{
        return state.customers
    })
    //Sorting ASC or DESC

    const handleSelectChange=(e)=>{
        const res=e.target.value
        setOrder(res)
        return customers.sort((a,b)=>{
            const obj1=a["name"].toLowerCase()
            const obj2=b["name"].toLowerCase() 
            if(res==="asc"){
                if (obj1 < obj2) {
                    return -1
                  }
                  if (obj1 > obj2) {
                    return 1
                  }
                  return 0
            }else{
                if(obj1 > obj2) {
                    return -1
                  }
                  if (obj1 < obj2) {
                    return 1
                  }
                  return 0
              }
         })
    }

    // Searching

    const handleSeachChange=(e)=>{
        const res=e.target.value
        setSearch(res)
        const result= customers.filter((ele)=>{
            return ele.name.toLowerCase().includes(res.toLowerCase())
        })
        if(result.length !==0){
            setData(result)
            setChanged(true)
        }else{
            setChanged(false)
        }
    }   

    const handleSearchStatusChanged=()=>{
        setChanged(!changed)
    }
    //Edit 

    const editItem=(formData,_id)=>{

        const result=customers.map((ele)=>{
            if(ele._id===_id){
                 return {...ele,...formData}
            }else{
                return {...ele}
            }   
        })
       setData(result)
       dispatch(editCustomerAction(formData,_id))
    }

    //delete 
    const deleteItem=(_id)=>{
        const result=data.filter((ele)=>{
            return ele._id !==_id
        })
        setData(result)
        dispatch(deleteCustomerAction(_id))
    }

    //Pagination
     
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    return(
        <div> 
            <h3>Total Customer-{customers.length}</h3>
            <select style={{margin:'20px'}} value={order} onChange={handleSelectChange}>
                <option value="">Select Option</option>
                <option value="asc">Order ASC</option>
                <option value="dscn">Order DSCN</option>
            </select>

            <TextField label="Search" placeholder="Enter Term to search" type="text" value={search} onChange={handleSeachChange} />

            {
                customers.length===0 ?
                <>
                 <h1>No Customer Found</h1>
                </>
                :
                <>
                         <TableContainer component={Box} item="true" xs={9}>

                        <Table className={classes.table}>
                        <TableHead>
                                <TableRow>
                                    <TableCell component="th">Sr No</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Edit</TableCell>
                                    <TableCell >Delete</TableCell> 
                                    <TableCell>View</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {
                                data.length !==0 ?
                                data
                                .slice(page * rowsPerPage,page* rowsPerPage +rowsPerPage )
                                .map((ele,i)=>{
                                    return <CustomersListItem key={ele._id} editItem={editItem} changed={changed} handleSearchStatusChanged={handleSearchStatusChanged} deleteItem={deleteItem} {...ele} srNo={i+1}/> 
                                })
                                :customers
                                .slice(page * rowsPerPage,page* rowsPerPage +rowsPerPage )
                                .map((ele,i)=>{
                                return <CustomersListItem key={ele._id} {...ele} srNo={i+1}/>
                                })
                            }
                        </TableBody>
                        </Table>

                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={customers.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />

                        </TableContainer>
                </>

          } 
        </div>
    )
}
export default CustomersList