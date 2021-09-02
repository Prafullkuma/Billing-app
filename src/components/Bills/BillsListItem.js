import React,{useState} from 'react'
import {useDispatch} from'react-redux'
import ViewProductDetails from './ViewProductDetails'

import {deleteBillsAction} from '../../actions/billsAction'
import {TableRow,TableCell,Button,IconButton,Dialog,DialogActions ,DialogTitle,DialogContent,DialogContentText} from '@material-ui/core'
import ViewListIcon from '@material-ui/icons/ViewList';
import DeleteIcon from '@material-ui/icons/Delete';

const BillsListItems=({srNo,customer,total,date,_id,customers,products,})=>{
    
    const [open, setOpen] = useState(false);

    const dispatch=useDispatch()

    //get Customer Name
    const getCustomer=(id)=>{
        const result=customers.find((ele)=>{
             if(ele._id===id){
                return {name:ele.name}  
             } 
        })
        if(result !== undefined){
            return result.name
        }
    }
    //View Bill

    // delete Bill
    const deleteHandle=(_id)=>{
        const sure=window.confirm("Are you sure")
        if(sure){
            dispatch(deleteBillsAction(_id))
        }
    }
    // for Modal
      const handleClickOpen = () => {
         setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    
     //View Hanlde

    return (
        <>
        <TableRow>
           <TableCell>{srNo}</TableCell> 
           <TableCell>{getCustomer(customer)}</TableCell>
           <TableCell>{total}</TableCell>
           <TableCell>{date}</TableCell>
           <TableCell>
                    <IconButton  onClick={()=>handleClickOpen(_id)} edge="end" aria-label="delete">
                         <ViewListIcon />
                     </IconButton>   
           </TableCell>
           <TableCell>
                <IconButton onClick={()=>deleteHandle(_id)} edge="end" aria-label="delete">
                            <DeleteIcon />
                </IconButton>   
           </TableCell>

        </TableRow>
            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
             >
                 <DialogTitle id="alert-dialog-title">View Bill Details</DialogTitle>
                    <DialogContent>

                        <ViewProductDetails _id={_id} customers={customers} products={products} />
                    
                    </DialogContent>
                    <DialogActions>
                      <Button variant="contained" color="secondary" onClick={handleClose} color="primary">
                            Download
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Go Back
                        </Button>
                    </DialogActions>
            </Dialog>
        </>
    )
}
export default BillsListItems