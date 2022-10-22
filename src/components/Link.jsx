import React from 'react'
import {Linkdata} from '../data/Linkdata'

const Link = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-7'>
    {
        Linkdata && Linkdata.map((data,idx)=>(
            <button class=" bg-gray-400 hover:bg-gray-500  text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded w-2/3" key={idx} 
            onClick={(e) => window.open(data.site, "_blank")}>
            <p className='flex items-center justify-center gap-5 '>
            {data.name}
            <a href={data.github} target="_blank" rel="noreferrer">       
            {data.iconSrc}          
            </a>
            </p>
            
            </button>
        ))
    }
    </div>
  )
}

export default Link