import React ,{useState }from 'react'

import {Grid,Button,TextField} from '@material-ui/core';


const DateSelection=({formSubmission})=>{
     const [dateOne,setDateOne]=useState('')
     const [datetwo,setDateTwo]=useState('')

     const [errorObj,setErrorObj]=useState({})
     let error={}

     const handleDateOneChange=(e)=>{
        setDateOne(e.target.value)
     }
     const handleDateTwoChange=(e)=>{
        setDateTwo(e.target.value) 
     }
     const runValidator=()=>{
         if(dateOne.length===0){
             error.startDate="Start Date is not present"
         }
         if(datetwo.length===0){
             error.endDate="End  Date is not present"
         }
     } 
     const handleSubmit=(e)=>{
         e.preventDefault()
         runValidator()    
         if(Object.keys(error).length===0){
            setErrorObj({})
            const formData={
                startDate:dateOne,
                endDate:datetwo
            }
            formSubmission(formData)
         }else{
             setErrorObj(error)
         }
     }

    return(
        <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                       
                        <label id="star" style={{margin:'10px'}}>Start Date</label> 
                        <TextField
                                htmlFor="star"
                                type="date"
                                value={dateOne}
                                onChange={handleDateOneChange}
                            />
                            <br/><br/>
                            <span>{errorObj.startDate &&<span style={{color:'red'}}>{errorObj.startDate}</span>}</span>
                    </Grid>
                     <Grid item xs={12} sm={6}>
                        <label id="start"  style={{margin:'10px'}}>End Date</label>
                        <TextField
                           htmlFor="start"
                            type="date"
                            value={datetwo}
                            onChange={handleDateTwoChange}
                        />
                        <br/><br/>

                    <span>{errorObj.endDate &&<span style={{color:'red'}}>{errorObj.endDate}</span>}</span>
                            </Grid>
                    <div style={{marginLeft:'20px'}}>
                        <Button variant="contained" color="secondary" type="submit"> Get Week Details</Button> 
                    </div>
                   </Grid>
                <br/><br/>
            </form>
    )
}
export default DateSelection