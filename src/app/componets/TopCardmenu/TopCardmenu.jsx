'use client'
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Sliderbar from '../Sliderbar/Sliderbar';
import logo from '../../assets/header-logo.png';
function TopCardmenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='mx-10'>
      {/* --------------------------off canvas ------------------------------------------ */}
      <div className={`fixed lg:hidden snap-y inset-0 z-50 bg-white dark:bg-dark-black transition-all py-0 duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className='flex justify-between items-center mt-5 p-2 '>
          <img src={logo} className=" w-16" />
          <button type="button" className="text-black dark:text-white text-xl hover:text-white focus:outline-none" onClick={toggleMenu} >
            <RxCross2 />
          </button>
        </div>
        <div className="pb-10 w-12">
          <Sliderbar></Sliderbar>
        </div>
      </div>
      
      {/* --------------------------off canvas end ------------------------------------------ */}

      <div className="hidden xl:block text-sm mt-10 text-white">
        <div className="container mx-auto px-0 ">
          <div className="flex justify-between items-center  dark:text-white">
            <ul className="flex bg-white px-1 py-3 rounded-md font-semibold dark:bg-dark-grey ring-1 ring-gray-300 dark:ring-dark-grey">
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white  px-4 py-2 rounded-md hover:bg-light-gray duration-300 dark:hover:bg-black transition "
                >
                  Top Ai Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white  px-4 py-2 rounded-md hover:bg-light-gray duration-300 dark:hover:bg-black transition "
                >
                  Most Saved Ai Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white  px-4 py-2 rounded-md hover:bg-light-gray duration-300 dark:hover:bg-black transition "
                >
                  Ai News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white  px-4 py-2 rounded-md hover:bg-light-gray duration-300 dark:hover:bg-black transition "
                >
                  Top Free Ai Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white  px-4 py-2 rounded-md hover:bg-light-gray duration-300 dark:hover:bg-black transition "
                >
                  Business AI Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white  px-4 py-2 rounded-md hover:bg-light-gray duration-300 dark:hover:bg-black transition "
                >
                  Productivity Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white  px-4 py-2 rounded-md hover:bg-light-gray duration-300 dark:hover:bg-black transition "
                >
                  Automation Tools

                </a>
              </li>
            </ul>
            <ul>
           
                <li className="bg-blue-950 text-white hover:bg-slate-200 hover:text-black px-3 py-2 rounded dark:hover:text-white dark:bg-white dark:text-black duration-300 font-semibold transition dark:hover:bg-dark-grey dark:">
                  <a href="#">More +</a>
                </li>

            </ul>
          </div>
        </div>
      </div>
      <button type="button" className="text-balance mt-10 block lg:hidden bg-slate-200 hover:bg-light-gray  px-3 py-2 rounded dark:bg-white text-black font-semibold transition duration-200 dark:hover:bg-blue-600 dark:hover:text-white" onClick={toggleMenu} >
        More +
      </button>
    </div>
  );
}

export default TopCardmenu;