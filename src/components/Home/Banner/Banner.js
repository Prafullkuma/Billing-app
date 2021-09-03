import React from 'react'
import TextComponent from './TextComponent'
import ImageComponent from './ImageComponent'
import {Grid }from '@material-ui/core'
const Banner=(props)=>{

    return(
        <div>
            <Grid container >    
                <Grid item xs={6}>
                    <TextComponent/>
                </Grid>
                <Grid item xs={6}>   
                    <ImageComponent/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Banner