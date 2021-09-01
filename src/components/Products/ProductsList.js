import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableContainer,Table,TableCell,TextField,TableHead,Box,TableRow,TableBody } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from "@material-ui/core/TablePagination";

import { getAllProducts } from '../../actions/productsAction'
import ProductsListItems from './ProductsListItem'

import {deleteProductAction,editProductAction} from '../../actions/productsAction'

const useStyles = makeStyles({
    table: {
      minWidth: 150,
    },
  });
  
const ProductsList=()=>{

     const [page, setPage] = useState(0);

     const [rowsPerPage, setRowsPerPage] = useState(5);
   
     const [data,setData]=useState([])
     const [search,setSearch]=useState('')
     const [changed,setChanged]=useState(false)

     const [order,setOrder]=useState('')

     const classes = useStyles();

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])
    

    const products=useSelector((state)=>{
        return state.products
    })

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    //Search
   const handleChange=(e)=>{
       const inputValue=e.target.value
       setSearch(inputValue)
       const result=products.filter((ele)=>{
           return ele.name.toLowerCase().includes(inputValue.toLowerCase())
       })
       if(result.length !==0){
            setData(result)
            setChanged(true)
       }else{
        setChanged(false)
       }
   }

   const handleStateChange=()=>{
     setChanged(!changed)
   }

   //edit
   const editData=(formData,_id)=>{
       const result=data.map((ele)=>{
           if(ele._id===_id){
               return {...ele,...formData}
           }else{
               return {...ele}
           }
       })
       setData(result)
       dispatch(editProductAction(formData,_id))
   }
   //Delete
   const deleteData=(_id)=>{
        const result=data.filter((ele)=>{
            return ele._id !==_id
        })
        setData(result)
        dispatch(deleteProductAction(_id))
   }
   //sorting

   const handleSelectChange=(e)=>{
    const res=e.target.value
    setOrder(res)
    return products.sort((a,b)=>{
        const obj1=a["name"].toLowerCase()
        const obj2=b["name"].toLowerCase() 
        // By name  either ascending or desending
          if(res==="asc"){
            if (obj1 < obj2) {
                return -1
              }
              if (obj1 > obj2) {
                return 1
              }
              return 0
          }
          if(res==="dscn"){
            if(obj1 > obj2) {
                return -1
              }
              if (obj1 < obj2) {
                return 1
              }
              return 0
          }
          // By Price  either ascending or desending
          if(res==="priceasc"){
            return a.price-b.price
          }
          if(res==="pricedscn"){
             return b.price-a.price 
          }
     })
   }
   return(
        <div>
            <h3>Total Products-{products.length}</h3>
              <select style={{margin:'20px'}}  value={order} onChange={handleSelectChange}>
                  <option value="">Select Option</option>
                 <option value="asc">Order ASC</option>
                 <option value="dscn">Order DSCN</option>
                 <option value="priceasc">Price ASC</option>
                 <option value="pricedscn"> price DSCN </option>
             </select>

             <TextField label="Search" placeholder="Enter Term to search" type="text" value={search} onChange={handleChange}/>
 

              { 
                products.length===0 ?
                <>
                    <h1>Not purchased a product. Add First Product</h1>
                </>
                :
                <div style={{margin:'30px'}}>
                    <TableContainer component={Box} item xs={9} >
                        

                    <Table className={classes.table} >
                            <TableHead>
                                  <TableRow>
                                        <TableCell>sr No</TableCell>
                                        <TableCell >Product Name</TableCell>
                                        <TableCell >Product Price</TableCell>
                                        <TableCell >Edit</TableCell>
                                        <TableCell>Delete</TableCell>
                                    </TableRow>
                            </TableHead>
                            <TableBody>
                             { data.length !==0 ?
                                    data
                                    .slice(page * rowsPerPage,page* rowsPerPage +rowsPerPage )
                                    .map((ele,i)=>{
                                    return <ProductsListItems key={ele._id} {...ele} changed={changed} editData={editData} deleteData={deleteData} handleStateChange={handleStateChange} srNo={i+1} />
                                  })
                                  :
                                  products
                                    .slice(page * rowsPerPage,page* rowsPerPage +rowsPerPage )
                                    .map((ele,i)=>{
                                    return <ProductsListItems key={ele._id} {...ele} srNo={i+1} />
                                  })
                             }
                            </TableBody>
                        </Table>

                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={products.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>

                 </div>
             
             }
        </div>
    )
}
export default ProductsList

