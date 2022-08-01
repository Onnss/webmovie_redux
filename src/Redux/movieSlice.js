import { createSlice } from "@reduxjs/toolkit";
import movies from '../data'

const  MovieSlice=createSlice({
    name:'movieapp',
    initialState:{
        movie:movies,
        filterTitle:'',
        filterRate:0
    },
    reducers :{
        Adding:(state,action)=>{
            state.movie.push(action.payload)
        },
        FilterTitle:(state,action)=>{
            state.filterTitle=action.payload
        },
        FilterRate:(state,{type,payload})=>{
            state.filterRate=payload
        },
    }
})

export default MovieSlice.reducer
export const {Adding,FilterTitle,FilterRate}=MovieSlice.actions