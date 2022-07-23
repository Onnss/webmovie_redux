//npm install react-bootstrap bootstrap
import {Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
//import movies from './MovieList';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Add({addMovie}) {
  const [show, setShow] = useState(false);
  const [newMovie,setnewMovie]=useState({
    id:8, //uuidv4
    title:"",
    genre:'',
    description:"",
    posterURL:"",
    rating:0,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange=(e)=>{
    setnewMovie({...newMovie, [e.target.name]:e.target.value})
  }
  const handleSave=()=>{
    addMovie(newMovie)
    handleClose()
  }
  return (
    <>
      <Button variant="success" size="lg" className='w-25 me-5' onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className=' row'>
            <label htmlFor="title" className='mt-1'>Title : </label>
            <input onChange={handleChange} name='title' type="text" id='title'/>
            <label htmlFor="genre" className='mt-2'>Genre :</label>
            <input onChange={handleChange} name='genre' type="text" id='genre' />
            <label htmlFor="Description" className='mt-2'>Description :</label>
            <input onChange={handleChange} name='description' type="text" id='Description' />
            <label htmlFor="Image" className='mt-2'>Image URL :</label>
            <input onChange={handleChange} name='posterURL' type="text" id='Image' />
            <label htmlFor="trailer" className='mt-2'>Trailer :</label>
            <input onChange={handleChange} name='trailer' type="text" id='trailer' />
            <Typography component="legend" className='mt-2'>Rating</Typography>
            <Rating name="rating" defaultValue={0} precision={0.5} onChange={(rvrnt,newValue)=>{
              setnewMovie({...newMovie,rating:newValue})
            }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}> Add movie </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;