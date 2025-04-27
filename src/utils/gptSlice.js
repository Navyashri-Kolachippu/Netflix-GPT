import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({

    name:"gpt",
    initialState:{
        showGPTSearch:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toggleShowGPTSearch:(state)=>
        {
            state.showGPTSearch=!state.showGPTSearch
        },
        addGPTMovieResults:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        },
        clearMovies:(state)=>{
            state.movieNames=null;
            state.movieResults=null;
        }
    }
})

export const {toggleShowGPTSearch,addGPTMovieResults,clearMovies}=gptSlice.actions;
export default gptSlice.reducer;