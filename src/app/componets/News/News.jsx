'use client'
import React, { useEffect } from 'react';
import BlogHead from '../BlogHead/BlogHead';
import OwlCarousel from 'react-owl-carousel';
import Image from 'next/image';

import news1 from '../../assets/news1.jpeg';
import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news3.jpg';
import news4 from '../../assets/news4.jpg';
import news5 from '../../assets/news5.jpg';
import { useSelector } from 'react-redux';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

function News() {
    const mode = useSelector(state => state.counter.mode);

    const newsData = [
        {
            date: 'March 22, 2024',
            desc: "AI Picture Generation & Its Endless Posibilities...",
            img: news1
        },
        {
            date: 'March 18, 2024',
            desc: "Empowering Creativity Through Picture Generation...",
            img: news2
        },
        {
            date: 'March 10, 2024',
            desc: "AI Art Generation At Your Finguretips...",
            img: news3
        },
        {
            date: 'February 24, 2024',
            desc: "The Evolution Of AI In Picture Genration...",
            img: news4
        },
        {
            date: 'February 19, 2024',
            desc: "Discover the Megic Of AI-Genrated Pictures...",
            img: news5
        },
    ];

    useEffect(() => {
        if (mode === "dark") {
            const btn1 = document.getElementsByClassName('owl-prev')[1];
            const btn2 = document.getElementsByClassName('owl-next')[1];
            if (btn1 && btn2) {
                btn1.classList.add("bg-dark-color");
                btn2.classList.add("bg-dark-color");
            }
        }
    }, [mode]);

    return (
        <div className='pt-10 px-10'>
            <BlogHead head={'AI News'} desc={'Read AI Related News. Updated daily.'} />
            <OwlCarousel className='owl-theme AI_Tools' id='light' autoplay={true} autoplayTimeout={5000} margin={20} dots={false} loop responsive={{ 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 }, 1299: { items: 4 } }} >
                {newsData &&
                    newsData.map((ele, ind) => (
                        <div key={ind} className='hover:dark:bg-dark-grey dark:text-white dark:bg-transparent dark:border-card-border bg-slate-100 text-black p-3 rounded-md border-1 '>
                            <Image src={ele.img} className='w-full rounded-md h-[160px] border-1 dark:border-card-border object-cover' alt={`News ${ind + 1}`} />
                            <div className='p-3'>
                                <p className='text-sm font-semibold dark:text-white pb-2'>{ele.date}</p>
                                <p className='h-12 text-md'>{ele.desc}</p>
                                <button className='flex items-top gap-0 text-sm mt-4'>Read More <MdOutlineArrowRightAlt className='text-2xl' /> </button>
                            </div>
                        </div>
                    ))}
            </OwlCarousel>
            <div className="flex justify-center md:justify-end mt-14 md:mt-4">
                <button className='py-2 px-5 border-1 dark:bg-white dark:text-black font-semibold dark:border-main-border border-blue-400 text-white bg-blue-600 rounded-md'>Read All News</button>
            </div>
        </div>
    );
}

export default News;
