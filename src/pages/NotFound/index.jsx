import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const NotFound = () => {
  return (
    <div className='notfound'>
      <h1>404: Page not found</h1>
      <Link to="/">Return Home</Link>
    </div>
  )
}

export default NotFound