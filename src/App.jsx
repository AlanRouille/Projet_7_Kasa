import React from 'react'
import './Styles/app.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import About from './Pages/Apropos'
import Home from './Pages/Home'
import Accomodation from './Pages/Accomodation'
import PageError from './Pages/PageError'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </Router>
  )
}

export default App
