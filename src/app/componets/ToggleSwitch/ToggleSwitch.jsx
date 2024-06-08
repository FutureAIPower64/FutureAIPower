"use client";
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { RxMoon } from 'react-icons/rx';
import { CgDarkMode } from "react-icons/cg";
import { PiSunDuotone } from "react-icons/pi";

const ToggleSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const outsideToggle = (event) => {
        if (isOpen && !event.target.closest('.dropdown-container')) {
            setIsOpen(false);
        }
    };

    window.addEventListener('mousedown', outsideToggle);

    return (
        <div className='text-black dark:text-white'>
            {/* ------------------------------------------------ */}
            <div className='container flex px-0 duration-300'>
                <div className="relative dropdown-container">
                    <button onClick={toggleDropdown} className="inline-flex items-center justify-center w-[35px] h-[35px] py-1 text-xl dark:text-gray-200 bg-transparent text-white dark:bg-dark-black dark:hover:bg-hover-black rounded-md duration-300 " >
                        {theme == 'system' ? <CgDarkMode className='text-gray-600 dark:text-white' /> : theme === 'dark' ? <RxMoon /> : <PiSunDuotone className='text-black' />}
                    </button>
                    <div className={`absolute right-0 z-10 mt-2 w-[100px] bg-white text-black shadow-lg dark:shadow dark:shadow-card-border dark:bg-dark-black rounded-md transition-all origin-top-right duration-300 ${isOpen ? "scale-100" : "scale-0"} `}>
                        <ul className="text-center p-1">
                            {["dark", "light", "system"].map((ele, ind) => {
                                return (
                                    <li key={ind} className='hover:bg-slate-100 dark:hover:bg-hover-black rounded-sm duration-300 dark:text-white'>
                                        <button onMouseDown={() => { setTheme(ele) }} className="w-full outline-none text-start px-1 py-1 capitalize">{ele}</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ToggleSwitch