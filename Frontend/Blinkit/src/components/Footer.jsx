import React from 'react'
import Youtube from '../assets/Icons/Youtube'
import Linkedin from '../assets/Icons/Linkedin'
import Instagram from '../assets/Icons/Instagram'
import Twitter from '../assets/Icons/Twitter'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full">
    <div className="mx-auto px-[10%]">
       
        <div classNameName="flex flex-col xl:flex-row gap-8 pt-14 pb-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 min-[890px]:grid-cols-5 lg:grid-cols-5 gap-4 xl:gap-8 w-full max-w-sm mx-auto sm:max-w-3xl min-[890px]:max-w-full">
                <div className="w-full  text-left">
                    <h4 className="text-xl text-gray-900 font-medium mb-7">Pagedone</h4>
                    <ul className=" transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Home</a>
                        </li>
                        <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">About</a>
                        </li>
                        <li className="mb-6"><a href="javascript:;"
                                className=" text-gray-600 hover:text-gray-900">Pricing</a></li>
                        <li className="mb-6"><a href="javascript:;"
                                className=" text-gray-600 hover:text-gray-900">Features</a></li>
                        <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Pro
                                Version</a></li>
                    </ul>
                </div>
               
                <div className="w-full  text-left">
                    <h4 className="text-xl text-gray-900 font-medium mb-7">Products</h4>
                    <ul className=" transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Figma UI
                                System</a></li>
                        <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Icons
                                Assets</a></li>
                        <li className="mb-6"><a href="javascript:;"
                                className=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                        <li className="mb-6"><a href="javascript:;"
                                className=" text-gray-600 hover:text-gray-900">Components Library</a></li>
                        <li className=""><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Plugin
                                Guide</a></li>
                    </ul>
                </div>
              
                <div className="w-full  text-left">
                    <h4 className="text-xl text-gray-900 font-medium mb-7">Resources</h4>
                    <ul className="  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">FAQs</a>
                        </li>
                        <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Quick
                                Start</a></li>
                        <li className="mb-6"><a href="javascript:;"
                                className=" text-gray-600 hover:text-gray-900">Documentation</a></li>
                        <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">User
                                Guide</a></li>
                        <li className=""><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Plugin
                                Guide</a></li>
                    </ul>
                </div>
               
                <div className="w-full text-left">
                    <h4 className="text-xl text-gray-900 font-medium mb-7">Blogs</h4>
                    <ul className="transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">News</a>
                        </li>
                        <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Tips &
                                Tricks</a></li>
                        <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">New
                                Updates</a></li>
                        <li className="mb-6"><a href="javascript:;"
                                className=" text-gray-600 hover:text-gray-900">Events</a></li>
                        <li className=""><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Editorial</a>
                        </li>
                    </ul>
                </div>
                
                <div className="w-full text-left">
                    <h4 className="text-xl text-gray-900 font-medium mb-7">Support</h4>
                    <ul className="transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Customer
                                Support</a></li>
                        <li className="mb-6"><a href="javascript:;"
                                className=" text-gray-600 hover:text-gray-900">Cookies</a></li>
                        <li className="mb-6"><a href="javascript:;"
                                className=" text-gray-600 hover:text-gray-900">License</a></li>
                        <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Terms &
                                Conditions</a></li>
                        <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Privacy
                                Policy</a></li>
                    </ul>
                </div>
               
            </div>
        </div>
        
      
        <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col sm:justify-between sm:flex-row">
                <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">pagedone</a>2024, All rights reserved.</span>
                <Link to='/termsandcondition'>
                <h3 className='hover:text-green-600 hover:underline'>Terms and Condition</h3>
                </Link>
                <div className="flex mt-6 space-x-4 sm:justify-center sm:mt-0 ">
                    <a href="javascript:;"
                        className="group w-9 h-9 transition-all duration-500 rounded-full border border-gray-300 flex justify-center items-center hover:border-indigo-600">
                       <Twitter/>


                    </a>
                    <a href="javascript:;"
                        className="group w-9 h-9 transition-all duration-500 rounded-full border border-gray-300 flex justify-center items-center hover:border-indigo-600">
                       <Instagram/>

                    </a>
                    <a href="javascript:;"
                        className="group w-9 h-9 transition-all duration-500 rounded-full border border-gray-300 flex justify-center items-center hover:border-indigo-600">
                        <Linkedin/>

                    </a>
                    <a href="javascript:;"
                        className="group w-9 h-9 transition-all duration-500 rounded-full border border-gray-300 flex justify-center items-center hover:border-indigo-600">
                       <Youtube/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer