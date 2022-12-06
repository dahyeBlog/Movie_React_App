import React,{useState,useEffect} from 'react'
import classes from './Movie.module.css'
import { useParams } from 'react-router-dom'
const apiKey = '04d3d1d7381fc6a469d9a3c3368d88de'


const Movie = () => {
  const {id} = useParams()
  const [movieDetail, setMovieDetail] = useState()

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`)
    .then((res) => res.json())
    .then((data) => setMovieDetail(data)
    )
  }

  useEffect(() => {
    window.scrollTo(0,0) //문서의 지정된 위치로 스크롤
    getData()
  }, [])

  console.log(movieDetail);
  
  return (
    <div  className={classes.movie}>
    <div className={classes.movie__intro}>
      <img
        className={classes.movie__backdrop}
        src={`https://image.tmdb.org/t/p/original${
          movieDetail ? movieDetail.backdrop_path : ""
        }`}
      />
    </div>

    <div className={classes.movie__detail}>
      <div className={classes.movie__detailLeft}>
        <div className={classes.movie__posterBox}>
          <img
            src={`https://image.tmdb.org/t/p/original${
              movieDetail ? movieDetail.poster_path : ""
            }`}
            className={classes.movie__poster}
          />
        </div>
      </div>

      <div className={classes.movie__detailRight}>
        <div className={classes.movie__detailRightTop}>
          <div className={classes.movie__name}>
            {movieDetail ? movieDetail.original_title : ""}
          </div>
          <div className={classes.movie__tagline}>
            {movieDetail ? movieDetail.tagline : ""}
          </div>
          <div className={classes.movie__rating}>
            {movieDetail ? movieDetail.vote_average : ""}{" "}
            <i className="fas fa-star" />
            <span className={classes.movie__voteCount}>
              {movieDetail
                ? "(" + movieDetail.vote_count + ") votes"
                : ""}
            </span>
          </div>
          <div className={classes.movie__runtime}>
            {movieDetail ? movieDetail.runtime + " mins" : ""}
          </div>
          <div className={classes.movie__releaseDate}>
            {movieDetail
              ? "Release date: " + movieDetail.release_date
              : ""}
          </div>
          <div className={classes.movie__genres}>
            {movieDetail && movieDetail.genres
              ? movieDetail.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className={classes.movie__genre}
                    id={genre.id}
                  >
                    {genre.name}
                  </span>
                ))
              : ""}
          </div>
        </div>
        <div className={classes.movie__detailRightBottom}>
          <div className="synopsisText">Synopsis</div>
          <div>{movieDetail ? movieDetail.overview : ""}</div>
        </div>
      </div>
    </div>

 
    </div>
  )
}

export default Movie