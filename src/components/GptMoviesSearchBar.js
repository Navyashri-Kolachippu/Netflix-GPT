import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResults } from '../utils/gptSlice';

const GptMoviesSearchBar = () => {
  const searchText= useRef(null);
  const dispatch =useDispatch();
  const selectedLang= useSelector((store)=>store.config.lang);
  //console.log(selectedLang);

  const searchMovieTMDB = async(movie)=>{
    const data = await fetch( "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    return json.results;
  }

  const handleGPTSearchClick= async()=>{
    const openAIdata = (await import('../utils/openai')).default;
    //console.log(searchText.current.value);

    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    //console.log(gptQuery);

    // const gptResults = await openAIdata.chat.completions.create({
    //   model: 'gpt-3.5-turbo',
    //   messages: [
    //     { role: 'system', content: 'You are a coding assistant that talks like a pirate' },
    //     { role: 'user', content: gptQuery }, // use user's input!
    //   ],
    // });
    // console.log(gptResults.choices[0].message.content);
     const gptResults=["Andaz apna apna","Padosan","Golmaal","Chupke chupke","Amar akbar anthony"];

     const PromiseArray=gptResults.map((movie)=>searchMovieTMDB(movie));

     const tmdbResults = await Promise.all(PromiseArray);

     //console.log(tmdbResults);

     dispatch(addGPTMovieResults({movieNames:gptResults,gptResults:tmdbResults}));
     
  }
  return (
    <div className="pt-[7%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} type="text" className="p-4 m-4 border-black col-span-9" placeholder={lang[selectedLang].gptSearchPlaceHolder}/>
        <button className="bg-red-600 text-white rounded-lg col-span-3 py-2 px-4 m-4" onClick={handleGPTSearchClick}>{lang[selectedLang].search}</button>
      </form>
    </div>
  )
}

export default GptMoviesSearchBar