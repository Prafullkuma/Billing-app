import React from 'react'
import { Link } from 'react-router-dom';

import ReactTypingEffect from 'react-typing-effect';


const TextComponent=()=>{

    const LinkStyle={        
         color:'black',
         fontWeight:'50px',
         textDecoration:'none',  
    }
    return(
        <div style={{textAlign:'center',marginTop:"150px",fontSize:'20px',textTransform:'uppercase'}}>
             <>
             <h1 className="font-loader">Get your all customers  <br/>
                 online with us 
             </h1>
             <br/>
                <ReactTypingEffect
                    text={["Product Service.","Customer Service.","Billing report."]}
                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                    displayTextRenderer={(text, i) => {
                    return (
                        <h1>
                        {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                            <span
                                key={key}
                                style={{ color:'#73d13d'}}
                            >{char}</span>
                            );
                        })}
                        </h1>
                    );
                    }}        
                />
          </>
            <div style={{margin:'50px', padding:'20px',border:'2px solid Black'}}>
                <Link style={LinkStyle} to="/register">Take Me</Link>
            </div>
        </div>
    )
}
export default TextComponent