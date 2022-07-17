//npm install react-bootstrap bootstrap
import {Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
//import movies from './MovieList';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Add() {
  //   const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" size="lg" className='position-absolute top-25 end-0 me-5' >
        Add
      </Button>

      <Modal >
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className=' row'>
        <label htmlFor="title">Title : </label>
            <input type="text" id='title'/>
            <label htmlFor="Description">Description :</label>
            <input type="text" id='Description' />
            <label htmlFor="Image">Image URL :</label>
            <input type="text" id='Image' />
            <Typography component="legend">Rating</Typography>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary"> Save Changes </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;