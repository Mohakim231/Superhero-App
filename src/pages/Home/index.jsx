import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Home = () => {
  return (
    <>
      <div className='main-content'>
        <h3>Welcome to the superhero database</h3>
        <p>Here you'll find information about all the superheros and their power</p>
      </div>
      <Link className='main-links' to='/Heroes'><h2 className='main-link-content'>Heroes</h2></Link>
      <Link className='main-links' to='/Best'><h2 className='main-link-content'>Number 1 Hero</h2></Link>
    </>
  )
}

export default Home