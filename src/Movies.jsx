import React, { Component,useEffect,useState } from 'react';
import { Image ,Col,Card, Row} from 'antd';
import { useNavigate } from 'react-router-dom';

const img_url = 'http://image.tmdb.org/t/p/';
const img_size = 'w185'

const ant_white_space = {
  whiteSpace: 'normal'
}
function Movies() {

    const [movieList, setMovies] = useState([]/* moviesData.movies.results */);

    const getMovies = () => {
      return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89380a90a8a4c6dd3fc290ae4accd2e4')
        .then(data => data.json())
    }

    useEffect(() => {
      let mounted = true;
      getMovies()
        .then(items => {
          if(mounted) {
            setMovies(items.results || [])
          }
        })
      return () => mounted = false;
    }, [])

    const navigate = useNavigate();

    const onClick = id => {
      navigate(`/movie/${id}`)
    }


    return (
      <div className="ml35">
        <h1 className="listProp">Top Rated Movies</h1>
        <div className="app">
          <div className="todo-list">
            <Row>

            {movieList.map((m, index) => (
                <React.Fragment key={m.id}>
                    <Col span={6} onClick = { () => onClick(m.id)}>
                        <Card title={<div style={ant_white_space}>{m.title}</div>}  bordered={true} >

                    <Image width={img_size} src={`${img_url}${img_size}${m.poster_path}`} />
                        </Card>
                    </Col>

                </React.Fragment>
            ))}
            {!movieList.length? <h1>No movies found</h1>:<p></p>}
            </Row>
          </div>
        </div>
      </div>
    );
  }


export default Movies;