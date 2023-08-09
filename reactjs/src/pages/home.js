import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/home.css";

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
        <h1>TESLA</h1>
        <p>Electrifying the way you drive</p>
        <Link to="/Contact">
        <button>Inquire</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
