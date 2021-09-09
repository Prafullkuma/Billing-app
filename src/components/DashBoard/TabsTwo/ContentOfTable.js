import React from 'react'
import { TableContainer,TableHead,TableRow,TableCell,Table ,TableBody} from '@material-ui/core';
import ContentOfTableList from './ContentOfTableList'

const ContentOfTable=({allCustomers,allBills,allProducts})=>{

    

    return(
        <div>
            <h1>List of Customer-{allCustomers.length}</h1>
            {
               allCustomers.length !==0 &&
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
                                allCustomers.map((ele)=>{
                                    return <ContentOfTableList key={ele._id} {...ele} allBills={allBills} allProducts={allProducts}/>
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