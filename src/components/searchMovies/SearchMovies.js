import React from 'react'
import { useGlobalContext } from '../../context/context';
import classes from './SearchMovies.module.css'
import { Link } from 'react-router-dom';
const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SearchMovies = () => {
  const {movies, isLoading} = useGlobalContext()

  if(isLoading) {
    return <div className={classes.loading}></div>
  }
  

  // console.log(movies);
  
  return (
    <section className={classes.movies}>
      {movies.map((movie) => {
        const poster = `https://image.tmdb.org/t/p/original${movie.poster_path}`
        
        const {id,title,release_date:date} = movie

        return (
          <Link to={`/movie/${id}`} key={id} className={classes.movie}>
            <article>
            <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className={classes.movie__info}>
                <h4 className={classes.title}>{title}</h4>
                <p>{date}</p>
              </div>
            </article>
          </Link>
          
        )
      })}
    </section>
  )
}

export default SearchMovies
