import React from 'react'
import {AiFillGithub,AiFillSlackCircle} from 'react-icons/ai'


const Social = () => {
  return (
    <div className='flex items-center justify-center gap-3 mt-8'>
    <AiFillSlackCircle className=' text-red-500 text-textBase text-3xl cursor-pointer'
    onClick={(e) => window.open('https://slack.com/', "_blank")}/>
    <AiFillGithub className='text-textBase text-3xl cursor-pointer'
    onClick={(e) => window.open('https://github.com/Rahdeg/webpage', "_blank")}/>
    </div>
  )
}

export default Social