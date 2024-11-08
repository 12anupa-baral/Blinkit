import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className="flex gap-3 max-w-sm">
        <Link to='/signup'>
    <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">
     Sign Up
    </button>
    </Link>
    <Link to='/login'>
    <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
      Login
    </button>
    </Link>
  </div>
  )
}

export default Button