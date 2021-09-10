import React from 'react'

const ImageComponent=()=>{
    const style={
        objectFit: 'cover',
        width:'100%',
        opacity:'0.5',
    }
    return(
        <div>
            <img src={`https://image.freepik.com/free-vector/modern-receipt-flat-style_23-2147908070.jpg`} style={style} alt=" not found"/>
        </div>
    )
}
export default ImageComponent