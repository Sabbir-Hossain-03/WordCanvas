import React from 'react'
import { testimonialsData, assets } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12 px-4'>
      {/* Title & Subtitle */}
      <h1 className='text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-2'>
        Customer testimonials
      </h1>
      <p className='text-gray-500 text-sm mb-12 text-center'>
        What Our Users Are Saying
      </p>

      {/* Testimonial Cards */}
      <div className='flex flex-wrap gap-6 justify-center items-stretch max-w-6xl'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='bg-white/20 border border-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center w-80'
          >
            {/* User Profile Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className='w-14 h-14 rounded-full object-cover mb-3'
            />

            {/* Name & Role */}
            <h2 className='text-lg font-semibold text-gray-800'>
              {testimonial.name}
            </h2>
            <p className='text-gray-500 text-xs mb-3'>
              {testimonial.role}
            </p>

            {/* Rating Stars */}
            <div className='flex gap-1 mb-4'>
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <img
                  key={i}
                  src={assets.rating_star || assets.star_icon}
                  alt="star"
                  className='w-4 h-4'
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className='text-gray-600 text-sm leading-relaxed'>
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial