import React, { useState,useEffect } from 'react'
import { DialogActions, TextField,Button ,Dialog,DialogContentText} from '@material-ui/core'
import { Typography } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    },
}));

const ProdcutsForm=({formSubmission,toggleStatus,isSaved})=>{
     const [name,setName]=useState('')
     const [price,setPrice]=useState('')
     const [errorObj,setErrorObj]=useState({})


     const [open, setOpen] = useState(false);

     const classes = useStyles();

     let errors={}

     useEffect(()=>{
        if(isSaved){
            setName('')
            setPrice('')
            toggleStatus()
        }
     },[isSaved,toggleStatus])

     const runValidatior=()=>{
        if(name.length===0){
            errors.name="Name can't be blank"
        }
        else if(price<=0){
             errors.price="Price is not set"   
        }
     } 
     const handleSubmit=(e)=>{
        e.preventDefault()
         runValidatior()

         if(Object.keys(errors).length===0){
             setErrorObj({})
                const formData={
                    name:name,
                    price:Number(price)
                }
                formSubmission(formData)
         }
         else{
            setErrorObj(errors)
         }
     }

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };


    return(
        <div>
             <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add Prodcut
             </Button>
             <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContentText style={{marginTop:'30px'}}>
                        <Typography color="primary" variant="h6">Add your products </Typography>
                
                   </DialogContentText >
                    <form onSubmit={handleSubmit} style={{margin:'40px'}} className={classes.root}>

                        <TextField label="Name" className={classes.margin} margin="dense" fullWidth type="text" placeholder="Enter produt name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                        <span>{errorObj.name && <span>{errorObj.name}</span>}</span>
                        <br/>
                        <TextField label="Price"  margin="dense" fullWidth type="text" placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
                        <span>{errorObj.price && <span>{errorObj.price}</span>}</span>
                        <br/>

                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>

                        <Button variant="contained" color="secondary"  type="submit">Add Product</Button>
                    </DialogActions>
                    </form>
            </Dialog>
        </div>
    )
}
export default ProdcutsForm