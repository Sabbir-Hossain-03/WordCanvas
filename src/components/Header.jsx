import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-2 rounded-full border border-neutral-500'>
        <p className='text-xl'>
          Best text to image generator.
        </p>
        <img src={assets.star_icon} alt="Star Icon" />
      </div>
      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mt-10 text-center'>
        Turn text to <span className='text-blue-600'>image</span>, in seconds.
      </h1>
      <p className='text-center max-w-xl mx-auto mt-7 text-gray-600 text-sm sm:text-lg'>
        Unleash your creativity with our AI-powered text-to-image generator. turn your imagination into visual art in seconds - just type, and watch the magic happen.
      </p>
      <button className='sm:text-lg text-white bg-black w-auto mt-8 px-10 py-3 flex items-center gap-2 rounded-full'>
        Generate Images
        <img className="h-8 w-8" src={assets.star_group} alt="Star Group" />
      </button>
      <div className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item, index) => (
          <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" key={index} width={70} />
        ))}
      </div>
      <p className='mt-2 text-nutral-600'>
        Generated images from WordCanvas
      </p>

    </div>
  )
}

export default Header
