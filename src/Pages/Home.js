import { useState } from 'react';
import React from 'react';
import MovieCard from '../Component/MovieCard';
import movies from '../Component/MovieList'
import Add from '../Component/Add';
import Filter from '../Component/Filter';
import '../App.css';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [datamovie,setdatamovie]=useState(movies)
    const addMovie=(newMovie)=>{
    setdatamovie([...datamovie,newMovie])
    }
    const [search,setsearch]=useState('');
    const [rate,setRate]=useState(0);
    const  v=datamovie.map(el=>[el.id,el.title,el.genre,el.posterURL,el.rating]).filter(e=>(e[1].trim().toLowerCase().includes(search.toLowerCase())&& e[4]>=rate))
    let navigate = useNavigate(); 
    React.useEffect(() => {
      window.addEventListener('click',(event) => {
        const h=v.map(el=>el[3])
        const m=h.map(el=>el===event.target.src).reduce((out, bool, index) => bool ? index : out,[])
        if (event.target.localName==="img" )
        {navigate('/movie/'+String(m))}
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
      <div className='App'>
        <h1 className='fw-bolder fs-1 pt-5 pb-4 text-white text-center'>Movies</h1>
        <div className='d-flex  justify-content-evenly my-5'>
        <Filter setsearch={setsearch} setRate={setRate} rate={rate} />
        <Add addMovie={addMovie}></Add>
        </div>
        <div className=" d-flex row justify-content-center pb-5 mt-5">
          {v.map(el=>(<MovieCard  key={el[0]} title={el[1]} genre={el[2]}  posterURL={el[3]} rating={el[4]} />))}
        </div>
      </div>
    );
  }

export default Home