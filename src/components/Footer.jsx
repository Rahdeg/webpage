import React from 'react'
import Zuri from '../assets/I4G.png'

const Footer = () => {
  return (
    <div className=' flex flex-col justify-between md:flex-row items-start  mt-10 p-4 mb-5 border-t-2 '>
    <h2 className='text-primary font-bold'>Zuri <span className=' text-red-600'>.</span>Internship</h2>
    <p className=' text-gray-400'>HNG Internship 9 Frontend Task</p>
    <img src={Zuri} alt='' className=''/>
    </div>
  )
}

export default Footer