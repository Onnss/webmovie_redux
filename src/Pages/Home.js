import React from 'react';
import '../App.css';
import Filter from '../Component/Filter';
import MovieList from '../Component/MovieList';

const Home = () => {
    return (
      <div>
      <Filter/>
      <MovieList/>
      </div>
    )
  }

export default Home