import React,{useState, useEffect, useCallback} from 'react'
import classes from './MovieList.module.css'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'

const apiKey = '04d3d1d7381fc6a469d9a3c3368d88de'

const MovieList = () => {
  const [movieList, setMovieList] = useState([])
  const {type} = useParams()

  // console.log(type);
  
  const getData = useCallback(() => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type:'popular'}?api_key=${apiKey}&language=ko-KR`)
    .then((res) => res.json())
    .then(data => setMovieList(data.results)
    )
  },[type])
  
  useEffect(() => {
    getData()
  }, [type])

  // console.log(movieList);

  return (
    <div className={classes.movie__list}>
      <h2 className={classes.list__title}>{(type ? type : 'POPULAR').toUpperCase()}</h2>
      <div className={classes.list__cards}>
        {movieList.map((movie,index) => (
          <Card key={movie.id} index={index} movies={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
