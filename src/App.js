import React,{useEffect, useState} from 'react'
import Navigation from './components/Navigation'
import WebFont from 'webfontloader';


const App=()=>{
 
    const [isLoggedIn,setIsLoggedIn]=useState( false)

    useEffect(() => {
        WebFont.load({
                google: {
                    families: ['Nunito','sans-serif']
                }
        });
    }, []); 

    const handleLoginStatus=()=>{
        setIsLoggedIn(!isLoggedIn)
    }
    
    return(
        <div>
            <Navigation isLoggedIn={isLoggedIn} handleLoginStatus={handleLoginStatus}/>
        </div>
    )
}
export default App