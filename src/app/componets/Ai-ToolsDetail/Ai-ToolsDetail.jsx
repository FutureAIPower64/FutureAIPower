"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosStar } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { LiaThumbsDown, LiaThumbsUp } from "react-icons/lia";
import { useSelector } from "react-redux";
import img1 from '../../assets/jasper.png';
import output from './output.json'
function AI_ToolsDetail() { 
  console.log(output);
  const AiTools = useSelector((state) => state.counter.cards);
  return (
    <div className="dark:text-gray-100 bg-light-ai-img dark:bg-Ai-image h-full bg-fixed bg-left dark:bg-left-bottom">
      <div className="container lg:px-10">
        <div className="md:pt-14">
          <div className="flex items-center gap-7 flex-wrap mb-6 md:w-10/12 pt-28">
            <Image
              src={img1}
              className="w-[60px] md:w-[100px] shadow rounded-2xl md:rounded-3xl shadow-card-border"
              alt="jasper"
              width={100}
              height={100}
            />
            <div>
              <h1 className="text-lg lg:text-3xl font-semibold">Jasper AI@</h1>
              <div className="flex pt-3 md:text-xl">
                <IoIosStar className="text-yellow-600 me-1" />
                <IoIosStar className="text-yellow-600 me-1" />
                <IoIosStar className="text-yellow-600 me-1" />
                <IoIosStar className="text-yellow-600 me-1" />
                <IoIosStar className="text-gray-500 me-1" />
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
            <span className="text-xs md:text-base dark:text-white text-black font-semibold">AI Categories :</span>
            <span className="text-xs md:text-base text-blue-500">
              #Content Creation, #Email Marketing, #Product Descriptions...
            </span>
          </div>
          <div className="mb-4">
            <span className="text-xs md:text-base dark:text-white text-black font-semibold">Model Pricing :</span>
            <span className="text-xs md:text-base text-blue-500"> Premium</span>
          </div>
        </div>
      </div>
      <div className="container justify-between xl:justify-center xl:gap-16 xl:p-0 flex flex-wrap">
        <div className="lg:w-3/5 xl:w-8/12 w-full mt-12">
          <div>
            <div className="dark:bg-dark-grey border-1 darl:border-dark-text-grey bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 dark:border-border-gray p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                What is Jasper AI ?
              </h2>
              <p className="text-xs md:text-base leading-relaxed" style={{ wordSpacing: "3px" }}>
                Jasper is an AI-powered content creation tool that assists users in generating various types of content quickly and efficiently. It can help with creating articles, blog posts, social media content, emails, ad copy, product descriptions, and more. Jasper uses advanced natural language processing (NLP) algorithms to understand user input and generate coherent and engaging content.
              </p>
            </div>
            <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl font-bold mb-5 dark:text-gray-50 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                Key Features :
              </h2>
              <ul className="list-disc list-inside text-xs md:text-sm">
                <li className="py-2 text-base">Content Creation: Generates articles, blog posts, social media content, emails, and more.</li>
                <li className="py-2 text-base">SEO Optimization: Enhances content for search engine visibility.</li>
                <li className="py-2 text-base">Email Marketing: Crafts content for email campaigns.</li>
                <li className="py-2 text-base">Social Media Management: Creates engaging social media posts.</li>
                <li className="py-2 text-base">Copywriting: Produces ad copy and product descriptions.</li>
                <li className="py-2 text-base">Market Research: Provides insights for content strategy.</li>
                <li className="py-2 text-base">Creative Writing: Assists with storytelling and personalized content.</li>
              </ul>
            </div>
            <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                Problem Solving :
              </h2>
              <p className="text-xs md:text-base leading-relaxed" style={{ wordSpacing: "3px" }}>
                Jasper AI: Your shortcut to top-notch, SEO-friendly content for blogs, ads, emails, and social media. Save time and boost productivity with AI-powered writing!
              </p>
            </div>
            <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                How This Tool Helps :
              </h2>
              <ol className="list-decimal pl-6">
                <li className="py-2 text-base">Content Creation</li>
                <li className="py-2 text-base">Brand Voice Integration</li>
                <li className="py-2 text-base">SEO Optimization</li>
                <li className="py-2 text-base">Conversational AI</li>
                <li className="py-2 text-base">Real-time Language Processing</li>
                <li className="py-2 text-base">Project Management</li>
              </ol>
            </div>
            <div className="dark:bg-dark-grey border-1 dark:border-border-gray bg-gray-100 shadow-lg dark:shadow-transparent shadow-gray-300 p-4 rounded-2xl mb-10">
              <h2 className="text-md md:text-2xl dark:text-gray-50 font-bold mb-5 border-b-1 border-b-dark-text-grey dark:border-b-border-gray pb-7 mt-2">
                Ratings &amp; Reviews :
              </h2>
              <div className="flex items-center mb-4 gap-10 flex-wrap">
                <div>
                  <div className="dark:text-white text-5xl font-bold mr-4">4.2</div>
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
          </div>
        </div>
        <div className="lg:w-1/3 xl:w-3/12 w-full mt-5 md:mt-12">
          <div className="bg-gray-100 rounded-xl dark:bg-transparent dark:shadow-transparent pt-2 px-2 pb-1 shadow-lg">
            <a className="flex items-center gap-1 lg:text-lg font-semibold" href="#">
              People also view <IoIosArrowForward className="mt-1" />
            </a>
            <div className="my-4">
              {AiTools.map((ele, ind) => {
                if (ind <= 15) {
                  return (
                    <div
                      key={ind}
                      className="flex justify-between box-content px-3 py-4 mt-4 border-b-1 dark:hover:bg-dark-black duration-300 dark:hover:rounded-lg border-gray-300 dark:border-border-gray items-center"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={ele.icon}
                          alt="Ai tools"
                          className="w-[50px] rounded-lg shadow dark:shadow-gray-600"
                          width={50}
                          height={50}
                        />
                        <div>
                          <p>{ele.title}</p>
                          <p className="flex items-center gap-1 my-1 text-xs text-gray-600 dark:text-gray-300">
                            <span>5.5</span> <IoIosStar className="inline text-sm text-orange-400" /> | {ele.tags[0]}
                          </p>
                        </div>
                      </div>
                      <div>
                        <button className="dark:text-black hover:text-black dark:bg-gray-100 text-dark text-xs py-1 hover:bg-dark-black duration-300 rounded border-1 px-2 dark:border-gray-300 dark:hover:bg-black dark:hover:text-white hover:border-white border-main-border">
                          {ele.buttonText}
                        </button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AI_ToolsDetail;
