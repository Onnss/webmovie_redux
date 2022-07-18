import { useState } from 'react';
import React from 'react';
import MovieCard from './Component/MovieCard';
import movies from './Component/MovieList'
import Add from './Component/Add';
import Filter from './Component/Filter';
import './App.css';

function App() {
  const [datamovie,setdatamovie]=useState(movies)
  const addMovie=(newMovie)=>{
  setdatamovie([...datamovie,newMovie])
  }
  const [search,setsearch]=useState('');
  const [rate,setRate]=useState(0);
  const v=datamovie.map(el=>[el.id,el.title,el.description,el.posterURL,el.rating]).filter(e=>(e[1].trim().toLowerCase().includes(search.toLowerCase())&& e[4]>=rate))
  return (
    <div className='App'>
      <h1 className='fw-bolder fs-1 pt-5 pb-4 text-white text-center'>Movies</h1>
      <div className='d-flex  justify-content-evenly my-5'>
      <Filter setsearch={setsearch} setRate={setRate} rate={rate} />
      <Add addMovie={addMovie}></Add>
      </div>
      <div className=" d-flex row justify-content-center pb-5 mt-5">
        {v.map(el=>(<MovieCard key={el[0]} title={el[1]} description={el[2]}  posterURL={el[3]} rating={el[4]} />))}
      </div>
    </div>
  );
}

export default App;
