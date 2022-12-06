import React,{useState, useEffect} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom';
import classes from './Card.module.css'

const Card = ({movie}) => {
  const [isLoading, setIsLoading] = useState(true)

  console.log(movie);
  

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 1500);
    }, [])
    

  return (
    <>
     {
     isLoading ? 
     <div className={classes.cards}>
          <SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton height={300} duration={2} />
          </SkeletonTheme>
      </div>
      :
      <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
        <div className={classes.cards}>
          <img className={classes.cards__img} src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path : ""}`} />
          <div className={classes.cards__overlay}>
            <div className={classes.card__title}>{movie?movie.original_title:""}</div>
            <div className={classes.card__runtime}>
              {movie?movie.release_date:""}
              <span className={classes.card__rating}>{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
            </div>
            <div className={classes.card__description}>{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
          </div>
        </div>
      </Link>
     } 
    </>
  )
}

export default Card
