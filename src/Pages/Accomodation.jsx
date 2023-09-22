import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Datas from '../Datas/Appart.json'
import Header from '../Components/Header'
import Carrousel from '../Components/Carrousel'
import Footer from '../Components/Footer'
import Collapse from '../Components/Collapse'
import starOff from '../Assets/stargrise.png'
import starRed from '../Assets/starred.png'

export default function Accomodation() {
  const [pictureSlider, setPictureSlider] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  // Recherche de l'Accomodation par ID dans les données
  const dataCurrentAccomodation = Datas.find((data) => data.id === id)

  useEffect(() => {
    // Vérification si l'Accomodation existe
    if (!dataCurrentAccomodation) {
      navigate('/error') // Rediriger vers la page d'erreur si l'Accomodation n'existe pas
    } else {
      setPictureSlider(dataCurrentAccomodation.pictures)
    }
  }, [id, navigate, dataCurrentAccomodation])

  // Vérification supplémentaire si dataCurrentAccomodation est défini
  if (!dataCurrentAccomodation) {
    return (
      <div>Accomodation introuvable. Veuillez revenir à la page d'accueil.</div>
    )
  }

  const name = dataCurrentAccomodation.host?.name.split(' ') || ['N/A', 'N/A']
  const rating = dataCurrentAccomodation.rating || 0
  const description =
    dataCurrentAccomodation.description || 'Description non disponible'
  const equipments = dataCurrentAccomodation.equipments || []

  return (
    <>
      <Header />
      <Carrousel pictureSlider={pictureSlider} />
      <main className="accomodation">
        <div className="accomodation_div">
          <div className="accomodation_div_infos">
            <h1>{dataCurrentAccomodation.title}</h1>
            <p>{dataCurrentAccomodation.location}</p>
            <div>
              {dataCurrentAccomodation.tags.map((tag, index) => {
                return <button key={index}>{tag}</button>
              })}
            </div>
          </div>

          {/* Vérification si dataCurrentAccomodation.host est défini */}
          {dataCurrentAccomodation.host && (
            <div className="accomodation_div_host">
              <div>
                <div className="accomodation_div_host_name">
                  <span>{name[0]}</span>
                  <span>{name[1]}</span>
                </div>
                <img
                  src={dataCurrentAccomodation.host.picture}
                  alt="propriétaire de cet hébergement"
                />
              </div>

              <div className="accomodation_div_host_stars">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1
                  return (
                    <img
                      key={index}
                      src={ratingValue <= rating ? starRed : starOff}
                      alt="star"
                    />
                  )
                })}
              </div>
            </div>
          )}
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={'Description'} content={description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={'Équipements'} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
