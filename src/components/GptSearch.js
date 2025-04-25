import React from 'react'
import GptMoviesSearchBar from './GptMoviesSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { background } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img src={background} alt="background"/>  
        </div>
        <GptMoviesSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch