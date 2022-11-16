import {useEffect, useState} from 'react'
import classes from './MovieList.module.css'
import {apiKey} from '../../lib/api'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'

const MovieList = () => {
  const [movieList, setMovieList] = useState([])
  const {type} = useParams()

  // console.log(type);
  

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [type])
  
  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${apiKey}&language=ko-KR`)
    .then(res => res.json())
    .then(data => setMovieList(data.results))
  }



  return (
    <div className={classes.movie__list}>
      <h2 className={classes.list__title}>{(type ? type : 'POPULAR').toUpperCase()}</h2>
      <div className={classes.list__cards}>
        {movieList.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList