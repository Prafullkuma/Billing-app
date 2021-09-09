import React from 'react'

import {DialogContent,
        DialogContentText,
        DialogActions,
        Button ,
        TableContainer,
        Table,
        TableHead,
        TableRow,TableCell,
        TableBody,
} from '@material-ui/core'

import ModalDataView from './ModalDataView'

const ModalData=({data,handleClose,allProducts})=>{
     
    
    return(
        <div>
            <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                     Tatal data-{data.length}
                    </DialogContentText>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((ele,i)=>{
                                    return <ModalDataView key={i} {...ele} allProducts={allProducts} />
                                })}

                            </TableBody>
                        </Table>
                    </TableContainer>

                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
        </DialogActions>

        </div>
    )
}
export default ModalData