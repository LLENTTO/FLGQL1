import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1><FaExclamationTriangle/> 404</h1>
        <p>Sorry, this page does not exist</p>
        <Link to='/' className='btn btn-primary'>Back to Home</Link>
    </div>
  )
}
