import React from 'react'

const GptMoviesSearchBar = () => {
  return (
    <div className="pt-[7%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input type="text" className="p-4 m-4 border-black col-span-9" placeholder="What would you like to watch today?"/>
        <button className="bg-red-600 text-white rounded-lg col-span-3 py-2 px-4 m-4">Search</button>
      </form>
    </div>
  )
}

export default GptMoviesSearchBar