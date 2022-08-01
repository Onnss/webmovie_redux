import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './movieSlice';

export const Store=configureStore({
    reducer:{
        Movie:MovieReducer
    }
})