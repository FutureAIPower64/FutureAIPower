'use client'
import React from 'react'
import { useState } from 'react';
import { GoTriangleDown } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { categorydata } from '../../store/counter/counterSlice';
function Sliderbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
    const getcatdata = (e) => {
        dispatch(categorydata(e));
    }
    return (
        <>

            <div className="h-screen fixed sliderBar w-full lg:w-2/12  overflow-scroll dark:text-white dark:bg-dark-black text-black xl:px-4 py-10  border-e-1 dark:border-card-border xl:ps-6 ">
                <h2 className="font-bold mb-4 text-lg ps-3 xl:ps-0 ">Category</h2>
                <ul className="space-y-2">
                    <li onClick={() => getcatdata("Photo Editor")} className='hover:bg-light-gray hover:dark:bg-dark-grey px-3 py-1 rounded-md '>Photo Editing</li>
                    <li onClick={() => getcatdata("Video Editor")} className='hover:bg-light-gray px-3 py-1  hover:dark:bg-dark-grey rounded-md '>Video Editing</li>
                    <li onClick={() => getcatdata("Text to Speech")} className='hover:bg-light-gray px-3 py-1 hover:dark:bg-dark-grey rounded-md '>Text To Speech</li>
                    <li onClick={() => getcatdata("Logo Generator")} className='hover:bg-light-gray px-3 py-1  hover:dark:bg-dark-grey rounded-md '>Logo Generator</li>
                    <li>
                        {/* <button className=" w-[90%] mx-auto xl:w-full flex items-center justify-between   hover:bg-light-gray hover:dark:bg-dark-grey px-3 py-1 mb-1   rounded-10" onClick={toggleAccordion} > */}
                        <button className=" w-[90%] mx-auto xl:w-full flex items-center justify-between   hover:bg-light-gray hover:dark:bg-dark-grey dark:hover:bg-gray-700 px-3 py-1 mb-1  rounded-lg" onClick={toggleAccordion} >
                            More
                            <span className={`transform transition duration-300 inline-block ml-2 ${isOpen ? 'rotate-180' : ''}`} >
                                <div className='p-1 dark:text-white'>
                                    <GoTriangleDown />
                                </div>
                            </span>
                        </button>
                        <ul className={`w-[90%] mx-auto xl:w-full overflow-hidden transition-all bg-white dark:bg-dark-black duration-300 rounded-lg ${isOpen ? 'max-h-48' : 'max-h-0'} ${isOpen ? 'border' : 'border-none'}`} >
                            <li onClick={() => getcatdata("Marketing")} className="py-1 px-3 hover:bg-light-gray hover:dark:bg-dark-grey  rounded-10">
                                <a href="#"> Marketing </a>
                            </li>
                            <li onClick={() => getcatdata("Productivity")} className="py-1 px-3 hover:bg-light-gray hover:dark:bg-dark-grey  rounded-10  ">
                                <a href="#">
                                    Productivity
                                </a>
                            </li>
                            <li onClick={() => getcatdata("SEO")} className="text-sm py-1 px-3  hover:bg-light-gray  dark:hover:dark:bg-dark-grey rounded-10">
                                <a href="#">
                                    SEO and Finance
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2 class="font-bold mt-8 mb-4  text-lg  ps-3 xl:ps-0">Collection</h2>
                <ul class="space-y-2">
                    <li className="py-1 px-3 hover:bg-light-gray rounded-md hover:dark:bg-dark-grey  "><a href="#">Best Tools</a></li>
                    <li className="py-1 px-3 hover:bg-light-gray rounded-md hover:dark:bg-dark-grey  "><a href="#">New Tools</a></li>
                    <li className="py-1 px-3 hover:bg-light-gray rounded-md hover:dark:bg-dark-grey  "><a href="#">Most Popular Tools</a></li>
                    <li className="py-1 px-3 hover:bg-light-gray rounded-md hover:dark:bg-dark-grey  "><a href="#">Featured Tools</a></li>
                </ul>

                <h2 class="font-bold mt-8 mb-4  text-lg  ps-3 xl:ps-0">AI News</h2>
                <ul class="space-y-2">
                    <li className="py-1 px-3 hover:bg-light-gray rounded-md hover:dark:bg-dark-grey "><a href="#">Latest News</a></li>
                    <li className="py-1 px-3 hover:bg-light-gray rounded-md hover:dark:bg-dark-grey "><a href="#">Top News</a></li>
                    <li className="py-1 px-3 hover:bg-light-gray rounded-md hover:dark:bg-dark-grey "><a href="#">Most Popular News</a></li>
                    <li className="py-1 px-3 hover:bg-light-gray rounded-md hover:dark:bg-dark-grey "><a href="#">Featured News</a></li>
                </ul>
            </div>
        </>
    )
}

export default Sliderbar
