import React from 'react'
import {Linkdata} from '../data/Linkdata'

const Link = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-5'>
    {
        Linkdata && Linkdata.map((data,idx)=>(
          <a href={data.site} target="_blank" rel="noreferrer" key={idx} id={data.id}
  className=" bg-gray-400 flex items-center justify-center hover:bg-gray-500 text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded w-2/3">{data.name}</a>
           
        ))
    }
    </div>
  )
}

export default Link