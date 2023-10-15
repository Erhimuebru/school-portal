import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";





const Header = () => {



    const [text] = useTypewriter ({
        words:[
            'Welcome To,',
            'Simple Field College...!',
            
        ],loop:true,
        delaySpeed:2000,
    })
    return ( 
    
    <>

   
             
            <div className="mt-4">
            <h1 className="text-3xl lg:text-2xl text-center font-semibold font-serif text-black">
                 <span className=" lg:text-2xl"> {text}</span>
                 <Cursor cursorColor="#F7AB0A" />

             </h1>

    

            </div>
        </> );
}
 
export default Header;