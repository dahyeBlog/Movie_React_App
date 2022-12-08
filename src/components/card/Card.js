import React,{useEffect} from 'react'
import classes from './Card.module.css'
import Skeleton from 'react-loading-skeleton'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'

const Card = ({movies}) => {
  const {isLoading,setIsLoading} = useGlobalContext()
  
  // console.log(movie);
  
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
      <Link to={`/movie/${movies.id}`} style={{textDecoration:"none", color:"white"}}>
        <div className={classes.cards}>
          <img className={classes.cards__img} src={`https://image.tmdb.org/t/p/original${movies ? movies.poster_path : ""}`} />
       
        </div>
      </Link>

      }
    </>
  )
}

export default Card
