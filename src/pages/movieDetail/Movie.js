import React, { useState, useEffect } from "react";
import classes from "./Movie.module.css";
import { useParams } from "react-router-dom";
const apiKey = "04d3d1d7381fc6a469d9a3c3368d88de";

const Movie = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState();

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  };

  useEffect(() => {
    window.scrollTo(0, 0); //문서의 지정된 위치로 스크롤
    getData();
  }, []);

  console.log(movieDetail);

  return (
    <div className={classes.movie}>
      <div className={classes.movie__intro}>
        <div className={classes.movie__detailLeft}>
          <img
            src={`https://image.tmdb.org/t/p/original${
              movieDetail ? movieDetail.poster_path : ""
            }`}
            className={classes.movie__poster}
          />
        </div>

        <div className={classes.movie__detailRight}>
          <div className={classes.movie__name}>
            {movieDetail ? movieDetail.title : ""}
          </div>

          <div className={classes.movie__rating}>
            <div className={classes.voteAverage}>평점</div>
            {movieDetail ? movieDetail.vote_average : ""}{" "}
          </div>

          <div className={classes.movie__runtime}>
            <div className={classes.runtime}>상영시간</div>
            {movieDetail ? movieDetail.runtime + " mins" : ""}
          </div>

          <div className={classes.movie__genres}>
            <div className={classes.genres}>장르</div>
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

          <div className={classes.movie__detailRightBottom}>
            <div className={classes.synopsisText}>줄거리</div>
            <div className={classes.synopsisTextLine}>
              {movieDetail ? movieDetail.overview.slice(0, 100) + "..." : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
