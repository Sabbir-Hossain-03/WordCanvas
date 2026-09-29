import React from 'react'
import {assets} from '../assets/assets'

const navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
    </div>
  )
}

export default navbar
