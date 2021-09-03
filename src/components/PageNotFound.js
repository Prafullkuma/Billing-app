import React from 'react'
import './styleCss.css'
import {Grid} from '@material-ui/core'
import pageNotLogo from '../Assets/undraw_omega_4kob.png'
import './styleCss.css'

const PageNotFound=()=>{
    return(
        <div>
            <h1 style={{textAlign:'center',margin:'20px'}}>Page Not Found</h1>
            <Grid container>
               <Grid item>
                    <img src={pageNotLogo} alt="404 page not"/>
                </Grid>
            </Grid>
        </div>
    )
}
export default PageNotFound