import React from 'react'
import Zuri from '../assets/I4G.png'

const Footer = () => {
  return (
    <div className=' flex items-center justify-between mt-10 p-4 mb-0'>
    <h2 className=' text-black'>Zuri <span className=' text-red-600'>.</span>Internship</h2>
    <p className=' text-gray-400'>HNG Internship 9 Frontend Task</p>
    <img src={Zuri} alt='' className=''/>
    </div>
  )
}

export default Footer