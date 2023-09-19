import Logo from '../Assets/logohome.png'
import Navbar from '../Components/Navbar'

export default function Header() {
  return (
    <header className="header">
      <h1>
        <img src={Logo} alt="Kasa" />
      </h1>
      <Navbar />
    </header>
  )
}
