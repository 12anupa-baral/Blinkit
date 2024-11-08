import React from 'react'
import Cart from '../assets/Icons/Cart'
import Flash from '../assets/Icons/Flash'
import Logo from '../assets/Icons/Logo'
import Hamburger from '../assets/Icons/Hamburger'
import Search from '../assets/Icons/Search'
import Button from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1">
    <div className="p-5">
      <div className="py-3 px-3 rounded-xl border w-full bg-green-900">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
          <Hamburger/>
            <p className="font-semibold text-white">LOGO</p>
            <div className="flex items-center gap-2">
           <Flash/>
            <p className="text-sm text-white hidden lg:block md:block">
              Order now and get it within <span className="text-yellow-300">15 min!</span>
            </p>
          
          </div>
          </div>

          <div className="relative hidden lg:block md:block">
              <input
                className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10"
                placeholder="Search for Grocery, Stores, Vegetable, or Meat"
              />
            <Search/>
            </div>
            <div className='flex gap-4 items-center'>
            <Button/>
            <Cart/>
            <Link to='/profile'>
            <img
              className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User profile"
            />
            </Link>
            
            </div>
        
        </div>
        
      </div>
    
    </div>
  </div>
  )
}

export default Navbar