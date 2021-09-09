import React from 'react'
import  _ from  'lodash'
import { TableContainer,TableHead,TableRow,TableCell,Table ,TableBody} from '@material-ui/core';
import ContentOfTableList from './ContentOfTableList'
const ContentOfTable=({allCustomers})=>{
    
    const uniqCustomer=()=>{
       const result=_.uniqBy([...allCustomers],'mobile')   
       return result
    } 
    const data=uniqCustomer()
    return(
        <div>
            <h1>List of Customer-{data.length}</h1>
            {
               data.length !==0 &&
               <TableContainer>
                      <Table>
                          <TableHead>
                          <TableRow>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell> View </TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                            {
                                data.map((ele)=>{
                                    return <ContentOfTableList key={ele._id} {...ele}/>
                                })
                            }
                          </TableBody>
                      </Table> 
               </TableContainer>    
            }
        </div>
    )
}
export default ContentOfTable