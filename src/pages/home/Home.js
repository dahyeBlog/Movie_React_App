import {useState, useEffect} from 'react'
import classes from './Home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'

const apiKey = '04d3d1d7381fc6a469d9a3c3368d88de'

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([])


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`)
    .then((res) => res.json())
    .then((data) => setPopularMovies(data.results)
    )
  }, [])

  // console.log(popularMovies);  

  return (
    <>
      <div>
        {popularMovies.length > 0 && (
          <Carousel
          showThumbs={false}
          autoPlay={true}
          autoFocus={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          >
            {popularMovies.map((movie) => (
               <Link
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                  style={{textDecoration:'none', color:'#fff'}}
               >
                <div className={classes.posterImage}>
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>

                <div className={classes.posterImage__overlay}>
                  <div className={classes.posterImage__title}>
                    {movie ? movie.original_title : ""}
                  </div>

                  <div className={classes.posterImage__runtime}>
                    {movie ? movie.release_date : ""}
                    <span className={classes.posterImage__rating}>
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div  className={classes.posterImage__description}>
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            
            ))}

          </Carousel>
        )}
      </div>
    </>
  )
}

export default Home