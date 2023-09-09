import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav_header">
      <Link to="/accueil" className="nav_header_nav-home" tabIndex={0}>
        Accueil
      </Link>
      <Link to="/about" className="nav_header_nav-propos" tabIndex={0}>
        A Propos
      </Link>
    </nav>
  )
}
