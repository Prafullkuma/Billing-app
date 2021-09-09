import React from 'react'
import { TableRow,TableCell} from '@material-ui/core'

const ModalDataView=({product,quantity,allProducts})=>{
    const getName=(id) =>{
        const result=allProducts.find((ele)=>{
            return ele._id===id
        })
        return result
    }

    return(
        <>
               <TableRow >
                    <TableCell>{getName(product).name}</TableCell>
                    <TableCell>{quantity}</TableCell>
                    <TableCell>{getName(product).price * Number(quantity) }</TableCell>
                </TableRow>
        </>
    )
}
export default ModalDataView