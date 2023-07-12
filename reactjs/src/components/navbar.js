import React from 'react';
import BLogo from '../resources/logo_black_1.png';
import {Link} from "react-router-dom";

function navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={BLogo} alt='logo'/>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/Model-3">Model 3</Link>
        <Link to="/Model-Y">Model Y</Link>
        <Link to="/Model-S">Model S</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default navbar
