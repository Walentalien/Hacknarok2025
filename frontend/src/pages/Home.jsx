import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem('token') !== null
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  if (!isAuthenticated) {
    return (
      <div className="app">
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="hamburger-icon"></span>
              </button>
              <div className="logo-section">
                <img src="/polish-eagle.png" alt="Godło Polski" className="eagle-logo" />
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
              <img src="/eu-flag.jpg" alt="Flaga UE" className="eu-flag" />
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
                <Link to="/login" className="primary-button">Zaloguj się</Link>
                <button className="secondary-button">Informacje Rządowe</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="app">
      <main className="main-content">
        <div className="content-wrapper">
          <h1>Witaj, {user?.mObywatelData?.firstName || 'Użytkowniku'}</h1>
          
          <div className="dashboard-grid">
            <Link to="/search" className="dashboard-item">
              <SearchIcon />
              <h3>Wyszukaj</h3>
              <p>Znajdź tematy i dyskusje</p>
            </Link>
            
            <Link to="/profile" className="dashboard-item">
              <PersonIcon />
              <h3>Profil</h3>
              <p>Zarządzaj swoim kontem</p>
            </Link>
          </div>

          <div className="recent-activity">
            <h2>Ostatnia aktywność</h2>
            <div className="activity-list">
              {/* Activity items will be populated here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
