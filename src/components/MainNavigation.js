import React from 'react'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <span> </span>
                    <Link to="/products">Products</Link>
                    <span> </span>
                    <Link to="/error">error</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation