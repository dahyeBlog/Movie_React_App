import React, { useEffect, useState } from "react";
import classes from "./Movie.module.css";
import { useParams } from "react-router-dom";
import { apiKey } from "../../lib/api";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className={classes.movie}>
      <div className={classes.movie__intro}>
        <img
          className={classes.movie__backdrop}
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>

      <div className={classes.movie__detail}>
        <div className={classes.movie__detailLeft}>
          <div className={classes.movie__posterBox}>
            <img
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              className={classes.movie__poster}
            />
          </div>
        </div>

        <div className={classes.movie__detailRight}>
          <div className={classes.movie__detailRightTop}>
            <div className={classes.movie__name}>
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className={classes.movie__tagline}>
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className={classes.movie__rating}>
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className={classes.movie__voteCount}>
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className={classes.movie__runtime}>
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className={classes.movie__releaseDate}>
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className={classes.movie__genres}>
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
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
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>

      <div className={classes.movie__links}>
      <div className={classes.movie__heading}>Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}>
                    <p><span className={`${classes.movie__homeButton} ${classes.movie__Button}`}>Homepage 
                    <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className={`${classes.movie__imdbButton} ${classes.movie__Button}`}>IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
      </div>

      <div className={classes.movie__heading}>Production companies</div>
      <div className={classes.movie__production}>
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <div key={company.id}>
              {company.logo_path && (
                <span className={classes.productionCompanyImage}>
                  <img
                    className={classes.movie__productionComapany}
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movie;
