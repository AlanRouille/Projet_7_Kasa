import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Banner() {
  const [isAboutPage, setIsAboutPage] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/about') {
      setIsAboutPage(true)
    }
  }, [location.pathname])

  return (
    <section className={isAboutPage ? 'banner_about' : 'banner'}>
      {!isAboutPage && <p>Chez vous, partout et ailleurs</p>}
    </section>
  )
}
