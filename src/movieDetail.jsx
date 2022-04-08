import React, { Component,useEffect,useState } from 'react';
import { Image ,Col,Card, Row} from 'antd';
import { useNavigate ,useParams} from 'react-router-dom';
// require('dotenv').config()

const img_url = 'http://image.tmdb.org/t/p/';
const img_size = 'w342'

function MovieDetail() {

    const [movie, setMovie] = useState({});
    const [key, setKey] = useState(process.env.REACT_APP_API_KEY);
    const {movie_id} = useParams();
    const getMovie = () => {
      return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}`)
        .then(data => data.json())
    }

    useEffect(() => {
      let mounted = true;
      getMovie()
        .then(m => {
          if(mounted) {
            setMovie(m || {})
          }
        })
      return () => mounted = false;
    }, [])

    const navigate = useNavigate();

    const onClick = id => {
      navigate(`/movie/${id}`)
    }

    const padd={
        padding:'50px'
    }

    return (
      <div className="ml35">
        <h1 className="listProp">Movie Information</h1>
        <div className="app">
          <div className="todo-list">
              <Row>

              <Col span={6}>

            <Image width={img_size} src={`${img_url}${img_size}${movie.poster_path}`} />
              </Col>
              <Col span={18} style={padd}>
                  <h2>{movie.original_title}</h2>
                  <p>{movie.overview}</p>
                  <p>User Rating - {movie.vote_average}</p>
                  <p>Release Date - {movie.release_date}</p>
              </Col>
              </Row>
          </div>
        </div>
      </div>
    );
  }


export default MovieDetail;