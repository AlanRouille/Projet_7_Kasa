import flecheRight from '../Assets/fleche_droite.png'
import flecheLeft from '../Assets/fleche_gauche.png'
import { useState } from 'react'

export default function Slider({ pictureSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPicture = () => {
    if (currentIndex === pictureSlider.length - 1) {
      setCurrentIndex(0) // Revenir au début si on est à la fin.
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevPicture = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictureSlider.length - 1) // Revenir à la fin si on est au début.
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section
      style={{ backgroundImage: `url(${pictureSlider[currentIndex]})` }}
      className="carousel"
    >
      {pictureSlider.length > 1 && (
        <>
          <img
            className="carousel_fleche carousel_fleche_left"
            src={flecheLeft}
            alt="next slider"
            onClick={prevPicture}
          />
          <img
            className="carousel_fleche carousel_fleche_right"
            src={flecheRight}
            alt="previous slider"
            onClick={nextPicture}
          />
          <p className="compteur">
            {currentIndex + 1} / {pictureSlider.length}
          </p>
        </>
      )}
    </section>
  )
}
