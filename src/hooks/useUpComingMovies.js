import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpComingMovies } from "../utils/movieSlice";
 
const useUpComingMovies=()=>{
 const dispatch=useDispatch();
 const upComingMoviesData=useSelector((store)=>store.movies.upComingMovies);
 const upComingMovies=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
    const json= await data.json();
    //console.log(json.results);
    dispatch(addUpComingMovies(json.results));
 }

  useEffect(()=>{
   !upComingMoviesData && upComingMovies()
  },[]);
}

export default useUpComingMovies;