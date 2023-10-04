const SecondaryCard = () => {
    return ( 
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20 ml-16 mr-16 sm:ml-2 bg-white">
            
            <div className="flex flex-col lg:mt-24 lg:ml-20 sm:mt-10">
                <h2 className=" text-gray-700 text-3xl mb-4">The Secondary School, Day, Festac Town</h2>
                <p>At The Top  Secondary School, we maintain a culture of academic excellence which is supported by the proper mix of academic and leadership training into our curriculum. We deploy a rigorous but result-oriented academic system that trains our learners to imbibe the confidence and competence needed to soar ahead in a competitive environment.
                    We have a calling to ensure the well-being of every member of the Loral family and to be a blessing to humanity. We know that no half measures has brought anybody to the pinnacle of success, therefore we approach every task with total commitment..</p>
              
              
                <div className="mt-10 sm:mb-5">
                    <button className="flex flex-row bg-[pink] text-red-800 pb-2 pr-4 pl-4 pt-2 mb-4 rounded-md">Read More
                 
                    </button>
               
                </div>    
            </div>
            <div className="w-full">
                <img
                    src="https://static.loralintlschools.sch.ng/assets/home/images/loral/justineelvisP_28.webp"
                    alt=""
                    className="w-full h-full rounded-2xl object-cover" />
            </div>
        </div></>
     );
}

 
export default SecondaryCard;