import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Datas from '../Datas/Appart.json'
import Header from '../Components/Header'
import Carrousel from '../Components/Carrousel'
import Footer from '../Components/Footer'
import Collapse from '../Components/Collapse'
import starOff from '../Assets/stargrise.png'
import starRed from '../Assets/starred.png'

export default function Accomodation() {
  const [pictureSlider, setPictureSlider] = useState([])
  const idAccomodation = useParams('id').id
  const dataCurrentAccomodation = Datas.filter(
    (data) => data.id === idAccomodation,
  )
  useEffect(() => {
    const dataCurrentAccomodation = Datas.filter(
      (data) => data.id === idAccomodation,
    )
    setPictureSlider(dataCurrentAccomodation[0].pictures)
  }, [idAccomodation])
  const name = dataCurrentAccomodation[0].host.name.split(' ')
  const rating = dataCurrentAccomodation[0].rating
  const description = dataCurrentAccomodation[0].description
  const equipments = dataCurrentAccomodation[0].equipments

  return (
    <>
      <Header />
      <Carrousel pictureSlider={pictureSlider} />
      <main className="accomodation">
        <div className="accomodation_div">
          <div className="accomodation_div_infos">
            <h1>{dataCurrentAccomodation[0].title}</h1>
            <p>{dataCurrentAccomodation[0].location}</p>
            <div>
              {dataCurrentAccomodation[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>
              })}
            </div>
          </div>
          <div className="accomodation_div_host">
            <div>
              <div className="accomodation_div_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentAccomodation[0].host.picture}
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
