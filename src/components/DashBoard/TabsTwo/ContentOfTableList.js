import React ,{useEffect, useState} from 'react'

import ModalData from './ModalData'

import {TableRow,TableCell,Button,Dialog} from '@material-ui/core'
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ContentOfTableList=({_id,name,mobile,allBills,allProducts})=>{
    const [open, setOpen] = useState(false); 
    const [data,setData]=useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(()=>{
        if(_id){
            const result=allBills.filter((ele)=>{
                    return ele.customer===_id
            }).map((ele)=>{
                return ele.lineItems.map((ele)=>{
                    return {product:ele.product,quantity:ele.quantity}
                })
            })
            const newSet=[].concat(...result)
            setData(newSet)
        }
    },[_id,allBills])

    return(
        <>
           <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell>{mobile}</TableCell>
                <TableCell>
                     <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        View Bill 
                     </Button>
                </TableCell>
           </TableRow>
           <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
              <ModalData  data={data} handleClose={handleClose} allProducts={allProducts}/>
           </Dialog>    
        </>
    )
}
export default ContentOfTableList