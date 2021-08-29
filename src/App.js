import React,{useEffect} from 'react'
import Navigation from './components/Navigation'
import WebFont from 'webfontloader';


const App=()=>{

        useEffect(() => {
            WebFont.load({
            google: {
                families: ['Nunito','sans-serif']
            }
            });
        }, []); 

    return(
        <div>
            <Navigation/>
        </div>
    )
}
export default App