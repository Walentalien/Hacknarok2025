import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="hamburger-icon"></span>
            </button>
            <div className="logo-section">
              <img src="/assets/polish-eagle.png" alt="Godło Polski" className="eagle-logo" />
              <div className="logo-text">
                <span className="gov-text">Gov.pl</span>
                <span className="service-text">Serwis Rzeczypospolitej Polskiej</span>
              </div>
            </div>
          </div>
          <div className="header-right">
            <Link to="/login" className="login-button">
              <span className="login-icon"></span>
              Zaloguj
            </Link>
            <img src="/assets/eu-flag.jpg" alt="Flaga UE" className="eu-flag" />
          </div>
        </div>
      </header>

      <div className="yellow-banner">
        <div className="banner-content">
          <span>Strona informacyjna portalu</span>
          <a href="#" className="banner-link">Przejdź do strony</a>
        </div>
      </div>

      <main className="main-content">
        <div className="content-wrapper">
          <h1>Witamy na forum</h1>
          
          <div className="info-section">
            <h2>Sprawdź najnowsze informacje dotyczące Twojej okolicy</h2>
            <p>Dołącz do dyskusji na forum</p>
            
            <div className="button-group">
              <button className="primary-button">Przejdź do serwisu</button>
              <button className="secondary-button">Informacje Rządowe</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home 