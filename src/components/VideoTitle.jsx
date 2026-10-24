import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-24 md:pt-62 absolute '>
        <div className='px-10 md:px-20'>
            <h1 className='text-md md:text-6xl font-bold text-white '>{title}</h1>
            <p className='text-xs md:text-sm w-1/2 md:w-1/3 text-white '>{overview}</p>
        </div>
        <div className=' my-2 md:my-5 mx-8 md:mx-20'>
            <button className='px-5 md:px-16 py-2 bg-gray-700 opacity-70 text-white text-sm md:text-md font-semibold m-2 rounded-lg hover:bg-black hover:opacity-95 cursor-pointer'>Play</button>
            <button className='px-3 py-2 bg-gray-700 text-white text-sm md:text-md font-semibold rounded-lg hover:bg-black'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle