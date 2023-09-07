import Header from '../Components/Header'
import { Link } from 'react-router-dom'

export default function PageError() {
  return (
    <div className="PageError">
      <Header />
      <div className="PageError_infos">
        <h1 className="PageError_infos_title">404</h1>
        <p className="PageError_infos_content">
          La page que vous recherchez n'existe pas.
        </p>
      </div>
      <Link className="PageError_infos_return" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
