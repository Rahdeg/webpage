import React from 'react'
import Image from '../assets/profile.png'
import Menu from '../assets/_Avatar share button (1).png'

const Profile = () => {
  return (
    <div className='flex flex-col items-center mb-8 '>
    <div className='hidden md:flex  md:items-center md:justify-evenly md:ml-96  md:relative w-full h-full'>
    <img src={Menu} alt=''/>
    </div>
    <div class="relative">
    <img class="w-10 h-10 rounded-full" src={Image} alt="" id='profile__img'/>
    <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
    <p className='text-textBase text-xl text-black font-semibold' id='twitter' >Walett25</p>
    <p className=' hidden' id='slack' >Rahdeg</p>

    </div>
  )
}

export default Profile