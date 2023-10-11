import React, { useEffect, useState } from 'react';
import { BsPersonCircle, BsPeople, BsReceipt  } from 'react-icons/bs'; // Import the book icon
import { BookOpenIcon, ReceiptPercentIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PiMoneyBold} from 'react-icons/pi';
import SubNav from '../../components/SubNav/SubNav';
import Header from '../../components/Header/Head';
import { apiGet } from "../../utils/api/axios";


const Dashboard = () => {
  const [examScores, setExamScores] = useState([]);
  const [firstCaScores, setFirstCaScores] = useState([]);
  const [secondCaScores, setSecondCaScores] = useState([]);
  const [totalStudent, setTotalStudent] = useState("");
  const [classSection, setClassSection] = useState("");
  const [fullName, setFullName] = useState('');
  const [user, setUser] = useState(null);
  const [userInfoVisible, setUserInfoVisible] = useState(false);
  const [previousResultsVisible, setPreviousResultsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const id = localStorage.getItem('id');



  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const { data } = await apiGet(`/users/${id}`);
        setUser(data);
        console.log(data)
        setExamScores(data.examScores);
        setFirstCaScores(data.firstCaScores) 
        setSecondCaScores(data.SecondCaScores) 
        setTotalStudent(data.setTotalStudent) 
        setFullName(data.fullName);
        setClassSection(data.classSection)
      } catch (error) {
        setLoading(false); 
        // Handle error
      }
    };

    fetchStudentDetails();
  }, [id]);

  

  const toggleUserInfo = () => {
    setUserInfoVisible(!userInfoVisible);
  };

  const togglePreviousResultsInfo = () => {
    setPreviousResultsVisible(!previousResultsVisible);
  };




  const handleSignOut = () => {
    // Clear the user's session (e.g., remove JWT token from local storage)
    localStorage.removeItem('token');
    localStorage.removeItem('id');

    // Navigate to the home screen
    navigate('/');
  };



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleExamScoresClick = () => {
    console.log('User Data:', user);
    const examScores = user?.examScores;
    const firstCaScores = user?.firstCaScores;
    const  SecondCaScores= user?.SecondCaScores;
    const fullName = user?.fullName;
    const totalStudent = user?. totalStudent;
   
    const classSection = user?.classSection
    console.log('Exam Scores:', examScores);
    navigate('/exam-scores', { state: { examScores: examScores,  totalStudent:totalStudent,   SecondCaScores:  SecondCaScores, firstCaScores:firstCaScores, fullName:fullName, classSection:classSection } });
  };

  return (

    <>
    <div>
      <SubNav/>
   
        <div className='flex flex-1 pt-6 justify-between items-center'>



        <div className="sm:hidden">
          <button
            className="text-black ml-4 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 mr-20" />
            ) : (
              <FaBars className="w-6 h-6 mt-5 lg:mr-6" />
            )}
          </button>


          {isMobileMenuOpen && (

            <div className="fixed top-0 left-8 z-50 w-screen h-screen bg-[#2c2c2c] py-6 px-6">
              <p onClick={closeMobileMenu}>
                <FaTimes className="w-10 h-10 ml-72 mb-2 text-white" />
              </p>
              <ul className="space-y-2">
              <li className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"><p>Class: <span className='font-bold'>{user?.classSection}</span></p></li>
               {/* <li className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"> <p>School Fee Status: <span className="font-bold">{user?.paymentStatus}</span></p></li> */}
               <li className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"><PiMoneyBold className='w-6 h-6 text-[green]' /><p className="font-bold">School Fee: {user?.paymentStatus}</p></li>
                <li className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"><BsPersonCircle className='w-6 h-6' /><p className="font-bold"> {user?.fullName}</p></li>
               <li   onClick={handleSignOut} className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"> < ArrowLeftOnRectangleIcon  className='w-6 h-6' />Sign Out</li>
              </ul>

            </div>
          )}
        </div>
        <Header/>
     <div>
   
       <div className='flex flex-1 gap-24 sm:ml-10 ml-10 lg:ml-10'>
      
       </div>
       </div>
       
     <div>
   
       <ul className="hidden lg:flex gap-6 space-x-4 mr-20">
       <li><p className='font-bold'>Home</p></li>
        <li><p>{user?.classSection}</p></li>
         <li> <p>School Fee Status: <span className="font-bold">{user?.paymentStatus}</span></p></li>
        <li className='flex flex-1 gap-2'><BsPersonCircle className='w-6 h-6' /><p className="font-bold"> {user?.fullName}</p></li>
       </ul>
     </div>
   </div>
    </div>
    

    



    
    <div className="min-h-screen mt-12 pt-10 pb-12 flex items-center gap-10 justify-center bg-gray-100">
      <div className="grid lg:grid-cols-2 gap-8 w-full sm:w-11/12 md:w-3/4 lg:w-3/5">



        <div onClick={toggleUserInfo} className="bg-[blue] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold">Student Profile</h2>
            <div className="flex space-x-4">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={toggleUserInfo}
              >
                <BsPersonCircle className='w-8 h-8' />
              </button>
            </div>
          </div>
          {userInfoVisible && (
            <div>
              <p>
                <span className="font-bold">Full Name:</span> {user?.fullName}
              </p>
              <p>
                <span className="font-bold">Phone Number:</span> {user?.phoneNumber}
              </p>
              <p>
                <span className="font-bold">Class Section:</span> {user?.classSection}
              </p>
              <p>
                <span className="font-bold">Payment Status:</span> {user?.paymentStatus}
              </p>
            </div>
          )}
        </div>



     
        <div onClick={handleExamScoresClick} className="bg-[#00aacc] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
      <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold">Results</h2>
            <div className="flex space-x-4">
              <button
                className="text-gray-600 hover:text-gray-800">
                   < BsReceipt className='w-8 h-8' />
              
              </button>
            </div>
          </div>
      </div>

 
  



<div onClick={togglePreviousResultsInfo} className="bg-[#00aaccbf] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
          <div className="flex items-center justify-between mb-4">
          <h2 className="font-extrabold">Previous Results</h2>
            <div className="flex space-x-4">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={togglePreviousResultsInfo}
              >
                <ReceiptPercentIcon className='w-8 h-8' />
              </button>
            </div>
          </div>
          {previousResultsVisible && (
          
            <p className='text-red-500'>No Results Yet......!</p>
          )}
        </div>




        <div className="bg-[yellow] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold">Curriculum</h2>
            <div className="flex space-x-4">
              <button
                className="text-gray-600 hover:text-gray-800">
                <BookOpenIcon className='w-8 h-8' />
              </button>
            </div>
          </div>

        </div>




       <Link to="/reviews"> <div className="bg-[green] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold">Parent Remark</h2>
            <div className="flex space-x-4">
              <button
                className="text-gray-600 hover:text-gray-800"

              >
                <BsPeople className='w-8 h-8' />
              </button>
            </div>
          </div>
         </div></Link>




        <div onClick={handleSignOut} className="bg-[red] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
        
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold">Sign Out</h2>
            <div className="flex space-x-4">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={handleSignOut}
              >
                <ArrowLeftOnRectangleIcon className='w-8 h-8' />
              </button>
            </div>
          </div>
        </div>



{/* 
        <Link to="/edits"> <div className="bg-[green] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold">Edit Result</h2>
            <div className="flex space-x-4">
              <button
                className="text-gray-600 hover:text-gray-800"

              >
                <BsPeople className='w-8 h-8' />
              </button>
            </div>
          </div>
         </div></Link> */}



      </div>
    </div></>
  );
};

export default Dashboard;



