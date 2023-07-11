import React from 'react';
import BLogo from '../resources/logo_black_1.png';

function navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={BLogo} />
      </div>
      <div className='rightSide'></div>
    </div>
  )
}

export default navbar
