import React from 'react'
import {MapPinIcon} from "@heroicons/react/24/solid"
// import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-6 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
           
             <div className=' items-center justify-center'>
              <h3 className="font-semibold ml-2 mb-4">Logo</h3>
              <div className='flex flex-row gap-2 '>
                    <MapPinIcon className="h-6 w-6 text-[gray]" opacity={0.4} />
                    <p className="text-gray-500 text-1xl">Edu, Agbara, Ogun State</p>
                    </div>
                {/* <SocialIcon url='https://wa.me/2349018471745'  fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='https://www.facebook.com/profile.php?id=100093726890134'  fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='https://twitter.com/FoodPadi'  fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='https://www.instagram.com/food_padi'  fgColor='gray' bgColor='transparent'/> */}
                {/* <SocialIcon url='https://www.linkedin.com/in/erhimu-ebru-blessing-29aa4917b/' fgColor='gray' bgColor='transparent'/> */}
               
               
               
                
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Subscribe For Newsletters</h3>
              <form>
                <input type="email" placeholder="Enter your email" className="bg-gray-700 rounded-lg py-2 px-4 mb-4 w-full text-white"/>
                <button type="submit" className="bg-gray-600 hover:bg-gray-700 rounded-lg py-2 px-4 w-full">Subscribe</button>
              </form>
            </div>
          </div>
          <hr className="border-gray-700 my-6"/>
          <p className="text-center text-gray-400">© 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
      
      
    );
}
 
export default Footer;