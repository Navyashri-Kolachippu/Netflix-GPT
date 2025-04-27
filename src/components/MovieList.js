import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    //console.log(movies);
    const scrollRef = useRef();

    const handleWheel = (e) => {
      if (e.deltaY === 0) return; // if no vertical scroll, do nothing
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    }

  return (
    <div className="px-6">
    <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
    <div ref={scrollRef}
        onWheel={handleWheel}
        className="flex overflow-x-auto no-scrollbar scroll-smooth">
      <div className="flex w-fit">
            { 
              movies?.map((movie)=>
              <MovieCard key={movie.id} posterPath={movie.poster_path}/>)
            }
            </div>
        </div>
    </div>
   
  )
}

export default MovieList
