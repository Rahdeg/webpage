import React from 'react'
import Link from './Links'
import Social from './Social'
import Profile from './Profile'
import Menu from '../assets/_Avatar share button.png'

const Main = () => {
  return (
    <div className='flex flex-col h-screen'>
    <div className='flex  items-center justify-end md:hidden w-full h-full'>
    <img src={Menu} alt=''/>
    </div>
    <Profile/>
    <Link/>
    <Social/>
    </div>
  )
}

export default Main