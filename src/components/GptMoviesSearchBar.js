import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const GptMoviesSearchBar = () => {
  const selectedLang= useSelector((store)=>store.config.lang);
  //console.log(selectedLang);
  return (
    <div className="pt-[7%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input type="text" className="p-4 m-4 border-black col-span-9" placeholder={lang[selectedLang].gptSearchPlaceHolder}/>
        <button className="bg-red-600 text-white rounded-lg col-span-3 py-2 px-4 m-4">{lang[selectedLang].search}</button>
      </form>
    </div>
  )
}

export default GptMoviesSearchBar