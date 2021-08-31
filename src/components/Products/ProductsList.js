import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableContainer,Table,TableCell,TableHead,Paper,TableRow,TableBody } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from "@material-ui/core/TablePagination";

import { getAllProducts } from '../../actions/productsAction'
import ProductsListItems from './ProductsListItem'

const useStyles = makeStyles({
    table: {
      minWidth: 150,
    },
  });
  
const ProductsList=()=>{

     const [page, setPage] = useState(0);

     const [rowsPerPage, setRowsPerPage] = useState(5);
   
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
   

    
    return(
        <div>
            { 
                products.length===0 ?
                <div>
                    <h1>Not purchase a product. Add First Product</h1>
                </div>
                :
                <div style={{margin:'30px'}}>
                    <TableContainer component={Paper} item xs={9} >
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
                                {products
                                    .slice(page * rowsPerPage,page* rowsPerPage +rowsPerPage )
                                    .map((ele,i)=>{

                                    return <ProductsListItems key={ele._id} {...ele} srNo={i+1} />
                                })}
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

