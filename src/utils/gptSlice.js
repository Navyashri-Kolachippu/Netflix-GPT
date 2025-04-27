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
    }
})

export const {toggleShowGPTSearch,addGPTMovieResults}=gptSlice.actions;
export default gptSlice.reducer;