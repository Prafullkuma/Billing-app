import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import validator from 'validator'

import { ListItem, Paper,DialogTitle,ListItemText,DialogActions,Button,ListItemSecondaryAction,IconButton,Dialog,TextField} from '@material-ui/core'

import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ViewListIcon from '@material-ui/icons/ViewList';
import Draggable from 'react-draggable';
import Swal from 'sweetalert2'

import {deleteCustomerAction} from '../../actions/customersAction'

import { editCustomerAction } from '../../actions/customersAction'

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }
}));

const CustomersListItem=({_id , name:Ename,mobile:Emobile,email:Eemail,createdAt})=>{
    
    const [open,setOpen]=useState(false)

    const [name,setName]=useState(Ename? Ename: '')
    const [mobile,setMobile]=useState(Emobile ? Emobile :'')
    const [email,setEmail]=useState(Eemail ? Eemail:'') 
    const [errorObj,setErrorObj]=useState({})
    
    let errors={}
    const classes = useStyles();

    const dispatch=useDispatch()

    const customers=useSelector((state)=>{
        return state.customers
    }) 

    const handleView=(_id)=>{
        if(_id){
            const result=customers.find((ele)=>{
                return ele._id===_id
            })
            Swal.fire(
                  `Name:${result,name},Email:${result.email}`,
                  `Mobile:${result.mobile}`,  
                  'success'
              )
        }
    }
    // delete Handle
    const deleteHandle=(_id)=>{
        const sure=window.confirm("Are you sure")
        if(sure){
            dispatch(deleteCustomerAction(_id))
        }
    }    

     const handleOpen=()=>{
        setOpen(true);
     }      
     const handleClose = () => {
        setOpen(false);
      };
      const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="name"){
               setName(e.target.value) 
        }
        else if(attr==="mobile"){
            setMobile(e.target.value)
        }else if(attr==="email"){
            setEmail(e.target.value)
        }
      }
      const runValidator=()=>{
        if(name.length===0){
            errors.name="Name can't be blank"
        }
        if(mobile.length===0){
            errors.mobile="Mobile can't be blank"
        }
        else if(mobile.length !==10){
            errors.mobile="Mobile should be 10 digit"
        }

        if(email.length===0){
            errors.email="Email can't be blank"
        }
        else if(!validator.isEmail(email)){
            errors.email="Email is not valid"
        }
    }
      const handleSubmit=(e)=>{
        e.preventDefault()
        runValidator()
        if(Object.keys(errors).length===0){
            setErrorObj({})
            const formData={
                name:name,
                mobile:mobile,
                email:email
            }
            dispatch(editCustomerAction(formData,_id))
        }else{
            setErrorObj(errors)
        }
    }
    return(
        <div>
             <ListItem>
                    <ListItemText
                            primary={`${Ename} - ${Emobile} - ${Eemail}`}
                    />
                    <ListItemSecondaryAction>
 
                            <IconButton edge="end" aria-label="view">
                                        <EditIcon title="Edit" onClick={handleOpen}/>
                            </IconButton>                       
                        
                            <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon title="Delete" onClick={()=>deleteHandle(_id)}/>
                            </IconButton>
                            <IconButton edge="end" aria-label="view">
                                    <ViewListIcon  title="View" onClick={()=>handleView(_id)}/>
                            </IconButton>
                  </ListItemSecondaryAction>
            </ListItem>
            <hr style={{margin:'10px'}}/>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
             >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Edit from
                    </DialogTitle>

                    <form onSubmit={handleSubmit} className={classes.root}>
                        <TextField type="text" label="Name" name="name" placeholder="Enter name" value={name} onChange={handleChange}/><br/>
                        <span>{errorObj.name && <span>{errorObj.name}</span>}</span>
                        <br/>
                        <TextField type="text" label="Mobile" name="mobile" placeholder="Enter mobile" value={mobile} onChange={handleChange}/>
                        <br/>
                        <span>{errorObj.mobile && <span>{errorObj.mobile}</span>}</span>
                 
                        <br/>
                         <TextField type="text" label="Email" name="email" placeholder="Enter email" value={email} onChange={handleChange}/>
                         <br/>
                         <span>{errorObj.email && <span>{errorObj.email}</span>}</span>
                 
                        <br/>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" onClick={handleClose}  color="primary">
                                Edit
                            </Button>
                        </DialogActions>
                    </form>     

            </Dialog>
        </div>
    )
}
export default CustomersListItem