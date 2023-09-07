import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  // Utilisez useLocation pour obtenir la route active
  const location = useLocation()

  return (
    <nav className="nav">
      <ul className="nav_liste">
        <li
          className={
            location.pathname === '/Kasa/'
              ? 'nav_liste_item_active'
              : 'nav_liste_item'
          }
        >
          <Link to="/accueil/">Accueil</Link>
        </li>
        <li
          className={
            location.pathname === '/about'
              ? 'nav_liste_item_active'
              : 'nav_liste_item'
          }
        >
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}
