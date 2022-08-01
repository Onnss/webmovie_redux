import { Rating } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailsPages = () => {
    const movies=useSelector(state=>state.Movie.movie)
    let {idd}=useParams()
    let film=movies.filter(element=>element.id===+idd)
    return (
        <div>
        {film.map(el=><div> <div className='mx-5'>
        <h2 className='my-5 text-center' ><b> {el.title}</b></h2>
        <h6 className='my-3'><b>Genre :</b>  {el.genre}</h6>
        <h6 className='my-3'><b>Rating :</b>  <Rating className="w-25" name="half-rating-read" defaultValue={el.rating} precision={0.5} readOnly /></h6>
        <h6 className='my-3'><b>Description:</b></h6>
        <p className='my-3'>{el.description}</p>
        <h6 className='my-3'><b>Trailer :</b></h6>
        <iframe className='my-3' width="875" height="366" src={el.trailer} title="Official Trailer" frameBorder="0" allowFullScreen></iframe>
    </div></div> )}
        </div>
    )
}

export default DetailsPages