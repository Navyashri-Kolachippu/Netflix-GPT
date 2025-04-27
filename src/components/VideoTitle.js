import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-lg md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 w-1/4 text-lg">{overview}</p>
        <div className="my-2 md:m-0">
            <button className="bg-white text-xl text-black py-1 md:py-4 px-3 md:px-12 rounded-lg hover:bg-opacity-80"> 🎬Play</button>
            <button className="hidden md:inline-block bg-gray-500 text-xl text-white p-4 px-12 rounded-lg mx-2 hover:bg-opacity-80">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle