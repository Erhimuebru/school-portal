import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import {PiGraduationCap, PiAddressBook} from 'react-icons/pi';
import {PhoneIcon, HomeIcon, CalendarIcon,  } from '@heroicons/react/24/solid';
import SubNav from '../SubNav/SubNav';

function Navbar() {

  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <SubNav />
    <header className="relative top-0 w-full h-20 flex justify-between items-center bg-white shadow text-black">

      <nav className="flex flex-grow gap-8 ml-4">

        <div className="sm:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 mr-20" />
            ) : (
              <FaBars className="w-6 h-6 lg:mr-6" />
            )}
          </button>


          {isMobileMenuOpen && (

            <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-[#2c2c2c] py-6 px-6">
              <p onClick={closeMobileMenu}>
                <FaTimes className="w-10 h-10 ml-72 mb-2 text-white" />
              </p>
              <ul className="space-y-2">
                <Link to="/all-men" onClick={closeMobileMenu}><li className="flex gap-3 p-4 rounded hover:cursor-pointer hover:text-red-950 text-white"><HomeIcon className='w-6 h-6' />Home</li></Link>
                <Link to="/all-women" onClick={closeMobileMenu}> <li className="flex p-4 gap-3 rounded hover:cursor-pointer hover:text-red-950 text-white"><BsPersonCircle className='w-6 h-6' />Student Portal</li></Link>
                <Link to="/all-sneakers" onClick={closeMobileMenu}><li className="flex gap-3 rounded p-4 hover:cursor-pointer hover:text-red-950 text-white"><PiGraduationCap className='w-6 h-6' />Admission</li></Link>
                <Link to="/all-beads" onClick={closeMobileMenu}> <li className="flex gap-3 rounded p-4 hover:cursor-pointer hover:text-red-950 text-white"><CalendarIcon className='w-6 h-6' />Events</li></Link>
                <Link to="/all-perfume" onClick={closeMobileMenu}>  <li className="flex gap-3 rounded  p-4 hover:cursor-pointer hover:text-red-950 text-white"> <PiAddressBook className='w-6 h-6' />About</li></Link>
                <Link to="/all-hand-bags" onClick={closeMobileMenu}> <li className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"> <PhoneIcon className='w-6 h-6' />Contacts</li></Link>

              </ul>

            </div>
          )}
        </div>
        {/* Logo */}



      

        <div className='flex flex-1 justify-between items-center'>
     
          <div>
            <div className='sm:ml-20 lg:ml-20'>
              {/* <img src={Logo} alt="" /> */}
              <h1>site logo</h1>
            </div></div>
          <div>
            <ul className="hidden sm:flex gap-6 space-x-4 mr-20">
              <li>
                <Link className="hover:text-red-950 text-gray-800" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-950 text-gray-800" to="/">
                  Student Portal
                </Link>
              </li>
              <li>

              </li>
              <li>
                <Link className="hover:text-red-950 text-gray-800" to="">
                  Admission

                </Link>
              </li>
              <li>
                <Link className="hover:text-red-950 text-gray-800" to="">
                  Events

                </Link>
              </li>

              <Link className="hover:text-red-950 text-gray-800" to="">
                About
              </Link>
              <li>
                <Link className="hover:text-red-950 text-gray-800" to="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}

      </nav>
    </header>
    </>
  );
}

export default Navbar;



