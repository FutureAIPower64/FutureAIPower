"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosStar } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { LiaThumbsDown, LiaThumbsUp } from "react-icons/lia";
import { useSelector } from "react-redux";
import img1 from '../../assets/jasper.png';
// import output from './output.json'
function AI_ToolsDetail() {
  // console.log(output);
  const AiTools = useSelector((state) => state.counter.ai);
  const AiCards = useSelector((state) => state.counter.aiCardData);
  console.log(AiCards);



  return (
    <div className="dark:text-gray-100 bg-light-ai-img dark:bg-Ai-image h-full bg-fixed bg-left dark:bg-left-bottom">
      <div className="container">
        <div className="md:pt-14">
          {
            AiCards.map((item) => (
              <>
                <div className="flex items-center gap-7 flex-wrap mb-6 md:w-10/12 pt-28">
                  <Image
                    src={item.icon}
                    className="w-[60px] md:w-[70px] shadow rounded-2xl md:rounded-3xl shadow-card-border"
                    alt="jasper"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h1 className="text-lg lg:text-3xl font-semibold">{item.title}</h1>
                    <div className="flex pt-3 md:text-xl">
                      {
                        item.star.map((item, i) => (
                          <IoIosStar key={i} style={{ paddingRight: '2px' }} color={item} />
                        ))
                      }
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="dark:bg-white bg-black text-white hover:bg-transparent hover:text-black hover:border-1 hover:border-border-gray dark:text-gray-800 hover:dark:text-white border-1 border-transparent px-5 py-1 rounded font-semibold flex items-center">
                      Visit<HiExternalLink className="ms-1" />
                    </button>
                    <FiBookmark className="ms-2 text-lg" />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-xs md:text-base dark:text-white text-black font-semibold">AI Categories : </span>
                  <span className="text-xs md:text-base text-blue-500">
                    {item.tags}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-xs md:text-base dark:text-white text-black font-semibold">Model Pricing :</span>
                  <span className="text-xs md:text-base text-blue-500"> {item.buttonText}</span>
                </div>
              </>
            ))

          }
        </div>
      </div>
      <div className="container">
        <div className="w-full mt-12">
          <div>
            {
              AiTools.map((item) => (
                <>
                  <div className="dark:bg-dark-grey border-1 darl:border-dark-text-grey bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 dark:border-border-gray p-4 rounded-2xl mb-10">
                    <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                      What is {item.Tools_name} ?
                    </h2>

                    <ul className="list-disc px-5 text-xs md:text-sm">
                      {
                        item.overview.map((item) => (
                          <li className="text-xs md:text-base leading-relaxed py-2" style={{ wordSpacing: "3px" }}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </div>


                  <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
                    <h2 className="text-md md:text-2xl font-bold mb-5 dark:text-gray-50 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                      Key Features :
                    </h2>
                    <ul className="list-disc px-5 text-xs md:text-sm">
                      {
                        item.feature.map((item) => (
                          <li className="text-xs md:text-base leading-relaxed py-2" style={{ wordSpacing: "3px" }}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
                    <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                      Problem Solving :
                    </h2>
                    <ul className="list-disc px-5 text-xs md:text-sm">
                      {
                        item.probleam_solving.map((item) => (
                          <li className="text-xs md:text-base leading-relaxed py-2" style={{ wordSpacing: "3px" }}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
                    <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                      How This Tool Helps :
                    </h2>
                    <ol className="list-decimal px-5 text-xs md:text-sm">
                      {
                        item.how_it_help && item.how_it_help.map((item) => (
                          <li className="text-xs md:text-base leading-relaxed py-2" style={{ wordSpacing: "3px" }}>
                            {item}
                          </li>
                        ))
                      }
                    </ol>
                  </div>
                  <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
                    <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                      Pros :
                    </h2>
                    <ul className="list-disc px-5 text-xs md:text-sm">
                      {
                        item.pros.map((item) => (
                          <li className="text-xs md:text-base leading-relaxed py-2" style={{ wordSpacing: "3px" }}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
                    <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                      Cons :
                    </h2>
                    <ul className="list-disc px-5 text-xs md:text-sm">
                      {
                        item.cons.map((item) => (
                          <li className="text-xs md:text-base leading-relaxed py-2" style={{ wordSpacing: "3px" }}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
                    <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                      Ratings &amp; Reviews :
                    </h2>
                    <div className="flex items-center mb-4 gap-10 flex-wrap">
                      <div>
                        <div className="dark:text-white text-2xl font-bold mr-4">{item.rating}</div>
                        <p className="text-dark-text-grey text-xs pt-3">6,584 RATINGS</p>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">
                            5 <IoIosStar className="me-1 text-orange-500" />
                          </p>
                          <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "84%" }}></div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">
                            4 <IoIosStar className="me-1 text-orange-500" />
                          </p>
                          <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">
                            3 <IoIosStar className="me-1 text-orange-500" />
                          </p>
                          <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">
                            2 <IoIosStar className="me-1 text-orange-500" />
                          </p>
                          <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "84%" }}></div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="flex items-center me-2 text-xs dark:text-dark-text-grey">
                            1 <IoIosStar className="me-1 text-orange-500" />
                          </p>
                          <div className="w-52 bg-yellow-900 h-2 rounded-full mr-2 overflow-hidden">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="dark:text-white text-sm font-bold mr-2 flex items-center border-e-1 border-e-border-gray pe-3">
                          5.0 <IoIosStar className="text-yellow-600 ms-1" />
                        </div>
                        <div className="ps-3 text-sm">Nice Tool!</div>
                      </div>
                      <div className="text-sm text-dark-text-grey py-2">John, 05/05/2024</div>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <div>
                        <p className="text-xs font-bold">Read More...</p>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center mr-4 text-xs dark:text-dark-text-grey">
                          <LiaThumbsDown className="text-base" />
                          <p>158</p>
                        </div>
                        <div className="flex items-center text-xs dark:text-dark-text-grey">
                          <LiaThumbsUp className="text-base" />
                          <p>267</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default AI_ToolsDetail;
