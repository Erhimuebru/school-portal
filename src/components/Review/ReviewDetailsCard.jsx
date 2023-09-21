import React from 'react'
import {StarIcon} from "@heroicons/react/24/solid"

const ReviewDetailsCard = ({
    id,
    
    name,
  comments
  }) => {
   
    return (  
        

        <>
 
 <div

className=" relative w-96 pl-3 mb-1 rounded-md bg-white shadow">

<div className="px-3 pb-4 ">
    <div className='flex flex-row gap-16'>
        <div>
        <p className=" font-bold text-red-900 pt-4 pb-4">{name}</p>
        </div>
   
    <div className='flex flex-row mt-4'>
    <StarIcon className='w-5 h-5 text-yellow-400'/>
    <StarIcon className='w-5 h-5 text-yellow-400'/>
    <StarIcon className='w-5 h-5 text-yellow-400'/>
    <StarIcon className='w-5 h-5 text-yellow-400'/>
<StarIcon className='w-5 h-5 text-yellow-400'/>
    </div>
    
    </div>

   
       </div>
    <p className='pb-4 text-[gray]'>"{comments}"</p>
   
        </div>




        </>  
        
    );
}
 
export default ReviewDetailsCard;