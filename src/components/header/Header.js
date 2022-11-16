import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className={classes.header__icon} /></Link>
        <Link to='/movies/popular' style={{textDecoration:"none"}}><span>Popular</span></Link>
        <Link to='/movies/top_rated' style={{textDecoration:"none"}}><span>Top Rated</span></Link>
        <Link to='/movies/upcoming' style={{textDecoration:"none"}}><span>Upcoming</span></Link>
      </div>
    </div>
  )
}

export default Header