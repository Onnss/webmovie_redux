import { useState } from 'react';
import React from 'react';
import MovieCard from './Component/MovieCard';
import movies from './Component/MovieList'
import Add from './Component/Add';
import './App.css';

function App() {
  return (
    <div className='App'>
    <h1 className='fw-bold fs-1 pt-5 pb-4 text-white text-center'>Movies</h1>
    <Add></Add>
    <div className=" d-flex row justify-content-center pb-5 mt-5">
      {movies.map(el => (<MovieCard key={el.id} title={el.title} description={el.description}  posterURL={el.posterURL} rating={el.rating} />))}
      </div>
    </div>
  );
}

export default App;
