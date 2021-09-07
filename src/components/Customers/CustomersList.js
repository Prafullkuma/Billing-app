import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {TextField ,TableContainer,Table,TableRow,TableBody,Box, TableCell, TableHead}  from '@material-ui/core'

import CustomersListItem from './CustomersListItem' 
import {allCustomerListAction} from '../../actions/customersAction'

const useStyles = makeStyles({
    table: {
      minWidth: 150,
    },
});
  
const CustomersList=()=>{

    const [order,setOrder]=useState('')    
    const [search,setSearch]=useState('')
    const [data,setData]=useState([])

    const dispatch=useDispatch()
    const classes = useStyles();

    useEffect(()=>{
        dispatch(allCustomerListAction())
    },[dispatch])

    const customers=useSelector((state)=>{
        return state.customers
    })
     useEffect(()=>{
         setData([...customers])
     },[customers])
    //Sorting ASC or DESC
    const sortByAscName=(data,param)=>{
        const result=data.sort((a,b)=>{
            const obj1=a["name"].toLowerCase()
            const obj2=b["name"].toLowerCase()
            if(param==="asc"){
                if (obj1 < obj2) {return -1 }
                if (obj1 > obj2) { return 1 }
              }
              return 0
         })
         setData(result)
    } 

    const sortByDescName=(data,param)=>{
        const result=data.sort((a,b)=>{
            const obj1=a["name"].toLowerCase()
            const obj2=b["name"].toLowerCase()
            if(param==="dscn"){
                if(obj1 > obj2) { return -1 }
                if (obj1 < obj2) { return 1 }  
              }
              return 0  
         })
         setData(result)
    }

    const handleSelectChange=(e)=>{
        const res=e.target.value
        setOrder(res)
         if(res==="asc"){
            sortByAscName(data,res)
         }
         else if(res==="dscn"){
            sortByDescName(data,res)
         }
    }

    // Searching

    const handleSeachChange=(e)=>{
        const res=e.target.value
        setSearch(res)

        const result= customers.filter((ele)=>{
            return ele.name.toLowerCase().includes(res.toLowerCase())
        })
        setData(result)
    }   

     
    
    return(
        <div> 
            <h1>Total Customer-{data.length}</h1>
            <label id="order">Order By</label>
            <select  htmlFor="order" style={{margin:'20px'}} value={order} onChange={handleSelectChange}>
                <option value="">Select Option</option>
                <option value="asc">Order ASC</option>
                <option value="dscn">Order DSCN</option>
            </select>

            <TextField label="Search" placeholder="Enter Term to search" type="text" value={search} onChange={handleSeachChange} />
            <br/>
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
                                        data
                                        .map((ele,i)=>{
                                        return <CustomersListItem key={ele._id} {...ele} srNo={i+1}/>
                                        })
                            }
                        </TableBody>
                        </Table>


                        </TableContainer>
                </>

          } 
        </div>
    )
}
export default CustomersList