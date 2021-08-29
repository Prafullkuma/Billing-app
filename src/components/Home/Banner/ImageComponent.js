import React from 'react'
import BillImage from '../../../Assets/Billing.jpg' 

const ImageComponent=()=>{
    const style={
        objectFit: 'cover',
        width:'100%',
        opacity:'0.5',
    }
    return(
        <div>
            <img src={BillImage} style={style} alt=" not found"/>
        </div>
    )
}
export default ImageComponent