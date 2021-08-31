import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableContainer,Table,TableCell,TableHead,Paper,TableRow,TableBody } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { getAllProducts } from '../../actions/productsAction'
import ProductsListItems from './ProductsListItem'

const useStyles = makeStyles({
    table: {
      minWidth: 150,
    },
  });
  
const ProductsList=()=>{
     const [search,setSearch]=useState('')
     const classes = useStyles();

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])
    

    const products=useSelector((state)=>{
        return state.products
    })

    
    return(
        <div>
            { 
                products.length===0 ?
                <div>
                    <h1>Not purchase a product. Add First Product</h1>
                </div>
                :
                <div>

                    
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Enter text to search"/>
                    
                    <TableContainer component={Paper}item xs={10} >
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
                                {products.map((ele,i)=>{

                                    return <ProductsListItems key={ele._id} {...ele} srNo={i+1} />
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>

                 </div>
             
             }
        </div>
    )
}
export default ProductsList

