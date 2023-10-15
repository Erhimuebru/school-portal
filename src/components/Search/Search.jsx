import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import { XCircleIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { BiSearch } from 'react-icons/bi';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


function Search() {
const endpoints = [
    'http://localhost:4000/users/',
    'https://foodpadi-backend.onrender.com/swallow',
    'https://foodpadi-backend.onrender.com/sharwama',
    'https://foodpadi-backend.onrender.com/barbecue',
    'https://foodpadi-backend.onrender.com/rice',
    'https://foodpadi-backend.onrender.com/snacks',
    'https://foodpadi-backend.onrender.com/cakes',
    'https://foodpadi-backend.onrender.com/soup'
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasMatchingResults, setHasMatchingResults] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const fetchSearchResults = async (endpoint) => {
    const apiUrl = `${endpoint}?surname=${encodeURIComponent(searchQuery)}`;
console.log('him see the name',fetchSearchResults )
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const resultsWithCategory = data.map((result) => ({
        ...result,
        category: endpoint.split('/').pop(),
      }));

      return resultsWithCategory;
    } catch (error) {
      console.error(`Error fetching search results from ${endpoint}:`, error);
      return [];
    }
  };

const performSearch = async () => {
    setIsLoading(true);
  
    const searchPromises = endpoints.map(async (endpoint) => {
      const results = await fetchSearchResults(endpoint);
      return results.filter((result) => {
        // Check if result.name is defined and not null before calling toLowerCase()
        if (result.fullName) {
          return result.fullName.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
      });
    });
  
    const searchResults = await Promise.all(searchPromises);
    const mergedResults = searchResults.flat();
  
    setSearchResults(mergedResults);
    setHasMatchingResults(mergedResults.length > 0);
    setIsModalOpen(true);
    setIsLoading(false);
  };
  

  const handleItemClick = (result) => {
    const { id, category } = result;

    if (id && category) {
      const endpoint = `/${category}/${id}`;
      history(endpoint);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };   
  

  return (

    <>

    <Navbar/>
    <div className='bg-gray-500 h-screen flex gap-6 justify-center items-center'>

    <div>
        <p className='mt-4 text-3xl font-serif text-center'>Search For Student</p>
    </div>
    <div className="flex justify-center items-center pb-2">
          <div className="flex flex-row space-x-2 rounded-full bg-white p-3">
              <BiSearch className='h-6 w-6 text-black' />
              <input
                  className="bg-white border-none outline-none h-5 max-w-screen-lg border-r-8"
                  type="text"
                  value={searchQuery}
                  onKeyUp={handleKeyUp}
                  onChange={handleSearchInputChange}
                  placeholder="Search for Student..." />
          </div>
          <button type="button" onClick={searchQuery ? performSearch : null}>
              <AdjustmentsVerticalIcon className="h-6 w-6 text-black" />
          </button>
          {isLoading && (
              <div className="full">
                  {/* <img src="https://res.cloudinary.com/dmfb370xe/image/upload/v1686271612/EVENTS/foodpadi/Red_Black_Simple_F_Letter_Logo_Design_1_gqklpj.png"
              className="bounce w-24 h-24 rounded-full"
              alt="" /> */}
              </div>
          )}

          {!hasMatchingResults && !isLoading && (
              <p className="text-red-500 text-center text-2xl absolute mt-20">
                  No Student found.
              </p>
          )}
          {hasMatchingResults && !isLoading && (
              <div className="mt-2 max-h-96 overflow-y-auto">
                  {isModalOpen && (
                      <div className="fixed inset-0 flex justify-center items-center z-10">
                          <div className="bg-[#c5c1c1] max-h-96 w-72 p-8 items-center rounded-md shadow-lg overflow-y-auto">
                              <button
                                  className="text-gray-500 hover:text-gray-700"
                                  onClick={closeModal}
                              >
                                  <XCircleIcon className="text-white h-12 w-12 mb-2" />
                              </button>
                              <div className="space-y-2">
                                  {searchResults.map((result) => (
                                      <div key={result.id} className="mb-12 bg-white rounded-lg  w-52 h-40">
                                          <button
                                              className="ml-4 text-white items-center"
                                              onClick={() => handleItemClick(result)}
                                          >

                                              {/* <img
                             src={result.image}
                             className="h-32 w-60 rounded"
                             alt='result'
                           /> */}

                                              <p className='font-extrabold text-[#01a296] text-center pt-3 '>{result.fullName}</p>
                                              <p className='font-extrabold text-[#01a296] text-center pt-1 '>{result.paymentStatus}</p>
                                              <p className='pt-1 font-extrabold text-[#01a296]'>{result.classSection}</p>
                                              <p className='pt-1 font-extrabold text-[#01a296]'>{result.department}</p>
                                              <p className='pt-1 font-extrabold text-[#01a296]'>{result.house}</p>
                                          </button>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  )}
              </div>
          )}
      </div>
      
      </div>
      
      <Footer/></>
);
}


export default Search;
