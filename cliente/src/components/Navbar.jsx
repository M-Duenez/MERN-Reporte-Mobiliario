import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <h1>Home</h1>

        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/new'>Crear Area</Link></li>
        </ul>
    </div>
  )
}

export default Navbar