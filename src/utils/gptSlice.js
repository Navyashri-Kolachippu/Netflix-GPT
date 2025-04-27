import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({

    name:"gpt",
    initialState:{
        showGPTSearch:false,
        gptMovies:null,
    },
    reducers:{
        toggleShowGPTSearch:(state)=>
        {
            state.showGPTSearch=!state.showGPTSearch
        },
        addGPTMovieResults:(state,action)=>{
            state.gptMovies=action.payload;
        },
    }
})

export const {toggleShowGPTSearch,addGPTMovieResults}=gptSlice.actions;
export default gptSlice.reducer;