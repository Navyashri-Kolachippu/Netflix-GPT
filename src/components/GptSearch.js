import React from 'react'
import GptMoviesSearchBar from './GptMoviesSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { background } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
            <img src={background} alt="background"/>  
        </div>
        <GptMoviesSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch