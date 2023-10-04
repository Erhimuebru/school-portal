const PrimaryCard = () => {
    return ( 
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 mb-20 ml-16 mr-16 sm:ml-2 bg-white">
            <div className="w-full">
                <img
                     src="https://static.loralintlschools.sch.ng/assets/home/images/loral/justineelvisP_1.webp"
                    alt=""
                    className="w-full rounded-2xl h-full object-cover" />
            </div>
            <div className="flex flex-col lg:mt-24 sm:ml-2 lg:ml-20 sm:mt-10">
                <h3>THE NURSERY AND PRIMARY SCHOOLS DAY, FESTAC TOWN (1978)</h3>
                <h2 className=" text-gray-700 text-3xl mb-4">Welcome to The Top Nursery and Primary school</h2>
                <p>The Top  Nursery and Primary school, Festac, can be aptly described as the mother school within The Top  Schools Limited. It is a co-educational school that runs the Nigerian/British Curriculum.
                    It aims at educating young learners between the ages of 2 and 11years, impacting them through creative and modern methods of teaching to deliver an all-round education.
                    The Top  Nursery and Primary School intends to raise a total child who is armed with creative, innovative skills and kept in tune with global trends to become problem solvers who with time will be relevant to their immediate environment and the world at large.</p>
              
              
                <div className="mt-10 sm:mb-5">
                    <button className="flex flex-row bg-[pink] text-red-800 pb-2 pr-4 pl-4 pt-2 mb-4 rounded-md">Read More
                 
                    </button>
               
                </div>    
            </div>
        </div></>
     );
}
 
export default PrimaryCard;