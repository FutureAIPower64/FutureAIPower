'use client'
import React, { useEffect, useState } from 'react'
import { PiSunDuotone } from 'react-icons/pi';
import { RxMoon } from 'react-icons/rx';
import { useTheme } from 'next-themes';

function ToggleSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme("dark");
    const [DarkBtn, setDarkBtn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // const setMode = (mode) => {
    //     if (mode == 'system') {
    //         window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    //             setTheme(event.matches ? 'dark' : 'light');
    //             setDarkBtn(theme);
    //         });
    //     } else {
    //         setTheme(mode);
    //     }
    //     toggleDropdown();
    // }

    const setMode = (mode) => {
        if (mode === 'system') {
            // Initialize theme based on system preference
            const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(systemDarkMode ? 'dark' : 'light');
            setDarkBtn(systemDarkMode ? 'dark' : 'light');

            // Listen for changes in system color scheme
            // const listener = event => {
            //     setTheme(event.matches ? 'dark' : 'light');
            //     setDarkBtn(event.matches ? 'dark' : 'light');
            // };
            // const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            // mediaQuery.addEventListener('change', listener);

            // Clean up listener when component unmounts
            // return () => mediaQuery.removeEventListener('change', listener);
        } else {
            // For manual dark/light mode selection
            setTheme(mode);
            setDarkBtn(mode);
        }
        toggleDropdown();
    };


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
        <div className='container flex px-0 duration-300'>
            <div className="relative dropdown-container">
                <button onClick={toggleDropdown} className="inline-flex items-center justify-center w-[40px] py-1 text-xl dark:text-gray-200 bg-transparent text-white dark:bg-dark-black dark:hover:bg-hover-black rounded-md duration-300 " >
                    {theme == 'system' ? DarkBtn == "dark" ? <RxMoon /> : <PiSunDuotone className='text-black' /> : theme == 'dark' ? <RxMoon /> : <PiSunDuotone className='text-black' />}
                </button>
                <div className={`absolute right-0 z-10 mt-2 w-[100px] bg-white text-black shadow-lg dark:shadow dark:shadow-card-border dark:bg-dark-black rounded-md transition-all origin-top-right duration-300 ${isOpen ? "scale-100" : "scale-0"} `}>
                    <ul className="text-center p-1">
                        {["dark", "light", "system"].map((ele, ind) => {
                            return (
                                <li key={ind} className='hover:bg-slate-100 dark:hover:bg-hover-black rounded-sm duration-300 dark:text-white'>
                                    <button onMouseDown={() => { setMode(ele) }} className="w-full outline-none text-start px-1 py-1 capitalize">{ele}</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ToggleSwitch
