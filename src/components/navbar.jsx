import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext'


const navbar = () => {

const { user } = useContext(AppContext)

const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center py-4'>
      <Link to="/"><img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {
        user ? 
        <div className='flex gap-2 sm:gap-3 items-center'>
          <button onclick={() => navigate('/buy')} className='flex gap-2 items-center bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
            <img src={assets.credit_star} alt="User" className='w-5'/>
            <p className='text-xs sm:text-sm font-bold text-gray-600'>Credit left: 50</p>
          </button>
          <p className='max-sm:hidden text-gray-600 pl-4 font-bold'>Hi, Sabbir</p>
          <div className='relative group'>
            <img src={assets.profile_icon} alt="User" className='w-10 drop-shadow'/>
            <div className='absolute hidden group-hover:block right-0 top-0 z-10 text-black rounded pt-12'>
              <ul className='list-none m-0 p-0 bg-white rounded-md border text-sm'>
                <li className='px-2 py-1 pr-10 cursor-pointer'>
                  Logout
                </li>
              </ul>

            </div>
          </div>
        </div>

        :
        
        <div className='flex gap-2 sm:gap-5 items-center'>
          <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
          <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
        </div>}
        
      </div>
    </div>
  )
}

export default navbar
