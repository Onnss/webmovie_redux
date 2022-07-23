import React from 'react'
import { useParams } from 'react-router-dom'
import movies from '../Component/MovieList'
import { Container,Nav,Navbar} from 'react-bootstrap'
import Details from '../Component/Details'

const ProfilePages = () => {
    let {idd} = useParams()
    let film=movies.filter(el=>el.id===+idd)
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    {film.map(el =><Details key={el.id} el={el} /> )}
    </div>
  )
}

export default ProfilePages