import React from "react";
import Rating from '@mui/material/Rating';
function MovieCard(props) {
    return ( <div className="container card p-3  bg-body rounded mt-3 mx-2 justify-content-evenly" style={{width:'300px',height:'400px'}} >
    <img className="d-flex w-75 align-self-center" src={props.posterURL} alt="Movie" />
    <h2 className="text-center">{props.title}</h2>
    <div className="d-flex row align-self-start">
    <h6 className="w-50">{props.description}</h6> 
    <Rating className="w-50" name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
    </div>
    </div> );
}

export default MovieCard;