import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableContainer,Table,TableCell,TablePagination,TextField,TableHead,Grid,TableRow,TableBody,Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { getAllProducts } from '../../actions/productsAction'
import ProductsListItems from './ProductsListItem'
import Select from 'react-select'


const useStyles = makeStyles({
    table: {
      minWidth: 150,
    },
  });
  
const ProductsList=()=>{

     const [search,setSearch]=useState('')
     const [data,setData]=useState([])
     const [order,setOrder]=useState('')
     
     const classes = useStyles();

     const dispatch=useDispatch()

      useEffect(()=>{
          dispatch(getAllProducts())
      },[dispatch])
      
        const products=useSelector((state)=>{
            return state.products
        })
        
        useEffect(()=>{
          setData([...products])
        },[products])
       
        //Search
      const handleChange=(e)=>{
          const inputValue=e.target.value
          setSearch(inputValue)
          const result=products.filter((ele)=>{
              return ele.name.toLowerCase().includes(inputValue.toLowerCase())
          })
          setData(result)
      }

      //sorting

      const sortByName=(data,param)=>{
        const result=data.sort((a,b)=>{
            const obj1=a["name"].toLowerCase()
            const obj2=b["name"].toLowerCase()
            if(param==="asc"){
              if(obj1 < obj2) {return -1 }
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
              if(obj1 > obj2) {return -1 }
              if (obj1 < obj2) { return 1 }
            }
            return 0
        })
        setData(result)
      }
      const sortByPrice=(data,param)=>{
          const result=data.sort((a,b)=>{
              return param==="priceasc" && a.price-b.price     
          }) 
          setData(result)
      }
      const sortByPriceDenc=(data,param)=>{
        const result=data.sort((a,b)=>{
            return param==="pricedscn" && b.price-a.price
        })
        setData(result)
     }

      const handleSelectChange=(item)=>{
            const res=item.value
            setOrder(res)             
            if(res==="asc"){
              sortByName(data,res)
            }
            else if(res==="dscn"){
              sortByDescName(data,res)
            }
            else if(res==="priceasc"){
              sortByPrice(data,res)
            }
            else if(res==="pricedscn"){
             sortByPriceDenc(data,res)
            }
      }

      const options=[
        {value:"asc",label:'Order ASC'},
        {value:'dscn',label:'Order DSCN'},
        {value:'priceasc',label:'Price ASC'},
        {value:"pricedscn",label:'price DSCN'}
      ]
      
      return(
            <div>
                <Paper style={{textAlign:'center'}}>
                  <h1>Total Products-{data.length}</h1>
                  <br/>
                </Paper>
                <br/>
                 <label id="order">Order By</label>
                 
                 <Grid container spacing={3}>
                      <Grid item xs={6}> 
                          <Select
                              placeholder="Select to sort"
                              options={options}
                              value={order}
                              onChange={handleSelectChange}   
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <TextField 
                            placeholder="Enter Term to search"
                           type="text" 
                           value={search} 
                           onChange={handleChange}/>
    
                      </Grid>
                 </Grid>

                  { 
                    products.length===0 ?
                    <>
                        <h1>Not purchased a product. Add First Product</h1>
                    </>
                    :
                    <div style={{margin:'30px'}}>
                        <TableContainer component={Paper} item="true" xs={9} >
                            

                        <Table className={classes.table} >
                                <TableHead>
                                      <TableRow>
                                            <TableCell>Sr.No</TableCell>
                                            <TableCell >Product Name</TableCell>
                                            <TableCell >Product Price</TableCell>
                                            <TableCell >Edit</TableCell>
                                            <TableCell>Delete</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                {     
                                       data
                                       .map((ele,i)=>{
                                        return <ProductsListItems key={ele._id} {...ele} srNo={i+1} />
                                      })
                                }
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                
                }
            </div>
        )
}
export default ProductsList

