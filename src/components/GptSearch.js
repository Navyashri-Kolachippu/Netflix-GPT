import React from 'react'
import GptMoviesSearchBar from './GptMoviesSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { background } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <img className="w-full h-full object-cover" src={background} alt="background" />
    </div>
    <div className="">    
        <GptMoviesSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch