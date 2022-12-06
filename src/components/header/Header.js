import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../movieLogo.png'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
      <Link to='/'>
      <img src={logo} className={classes.header__icon} alt="" />
      </Link> 
      <Link to='/movies/popular' style={{textDecoration:"none"}}><span>Popular</span></Link>
        <Link to='/movies/top_rated' style={{textDecoration:"none"}}><span>top_rated</span></Link>
        <Link to='/movies/upcoming' style={{textDecoration:"none"}}><span>upcoming</span></Link>
      
      </div>
    </div>
  )
}

export default Header
