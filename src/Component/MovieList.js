import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating'
import Add from './Add';
import { Link } from 'react-router-dom';

function MovieList() {
  const movie=useSelector(state=>state.Movie.movie)
  const search=useSelector(state=>state.Movie.filterTitle)
  const rate=useSelector(state=>state.Movie.filterRate)
  const filtered=movie.filter(el=>el.title.toLowerCase().includes(search.trim().toLowerCase()) && el.rating>=rate)
  return (
<div>
<Add/>
    <Row xs={1} md={2} className="g-4">
      {filtered.map((el,id) => ( 
        <Link to={`/movie/${el.id}`}>
        <Col key={id}>
          <Card>
            <Card.Img variant="top" src={el.posterURL}/>
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>
                {el.genre}
                <Rating name="half-rating-read" defaultValue={el.rating} precision={0.5} readOnly />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Link>
      ))}
    </Row>
    </div>
  );
}

export default MovieList;