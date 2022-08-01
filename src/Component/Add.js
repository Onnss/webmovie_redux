import { Rating } from '@mui/material';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {v4 as uuidv4} from 'uuid'
import {Adding} from '../Redux/movieSlice'
import {useDispatch} from 'react-redux'
function Add() {
  const [show, setShow] = useState(false);
  const [newMovie,setNewMovie]=useState({
    id:uuidv4(),
    title:'',
    genre:'',
    description:'',
    trailer:'',
    posterURL:'',
    rating:0
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const HandleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
}
let dispatch=useDispatch()
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Add a movie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <input onChange={HandleChange} name='title' type="text" placeholder='Enter Title' />
        <input onChange={HandleChange} name='description' type="text" placeholder='Enter Description' />
        <input onChange={HandleChange} name='trailer' type="text" placeholder='Enter Url Trailer' />
        <input onChange={HandleChange} name='genre' type="text" placeholder='Enter Genre' />
        <input onChange={HandleChange} name='posterURL' type="text" placeholder='Enter Poster URL' />
        <Rating name="rating" defaultValue={0} precision={0.5} onChange={(event,value)=>setNewMovie({...newMovie,rating:value})} />
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(Adding(newMovie));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Add