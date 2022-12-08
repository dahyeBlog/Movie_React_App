import React,{useEffect} from 'react'
import classes from './Card.module.css'
import Skeleton from 'react-loading-skeleton'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'

const Card = ({movies,index}) => {
  const {isLoading,setIsLoading} = useGlobalContext()
  const indexNum = index + 1

  // console.log(indexNum);
  
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

      <p className={classes.indexNum}>{indexNum}</p>
        <div className={classes.cards}>
        
          <img className={classes.cards__img} src={`https://image.tmdb.org/t/p/original${movies ? movies.poster_path : ""}`} />
       
        </div>
      </Link>

      }
    </>
  )
}

export default Card
