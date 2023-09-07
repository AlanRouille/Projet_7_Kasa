import React from 'react'
import logo from '../Assets/Logonoir.png'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa-agence de location d'appartement " />
      <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
