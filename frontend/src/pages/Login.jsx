import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-header">
        <Link to="/" className="logo-link">
          <img src="/assets/polish-eagle.png" alt="Godło Polski" className="small-eagle" />
          <span className="gov-text">gov.pl</span>
        </Link>
        <div className="language-selector">
          <span className="globe-icon">🌐</span>
          <button className="lang-button active">polski</button>
        </div>
      </div>

      <div className="login-container">
        <div className="login-content">
          <div className="login-methods">
            <h1>Zaloguj się do usługi</h1>
            <p className="subtitle">Wybierz bezpieczny sposób logowania</p>

            <div className="login-options">
              <Link to="#" className="login-option">
                <div className="option-icon trusted-profile"></div>
                <div className="option-content">
                  <h3>Profil zaufany</h3>
                  <p>Użyj loginu i hasła lub bankowości elektronicznej</p>
                </div>
                <span className="arrow-icon">›</span>
              </Link>

              <Link to="#" className="login-option">
                <div className="option-icon mobywatel"></div>
                <div className="option-content">
                  <h3>Aplikacja mObywatel <span className="badge">Polecamy</span></h3>
                  <p>Skanuj kod QR za pomocą aplikacji mObywatel</p>
                </div>
                <span className="arrow-icon">›</span>
              </Link>

              <Link to="#" className="login-option">
                <div className="option-icon e-banking"></div>
                <div className="option-content">
                  <h3>Bankowość elektroniczna</h3>
                  <p>Zaloguj się za pomocą bankowości elektronicznej</p>
                </div>
                <span className="arrow-icon">›</span>
              </Link>

              <Link to="#" className="login-option">
                <div className="option-icon e-dowod"></div>
                <div className="option-content">
                  <h3>e-Dowód</h3>
                  <p>Użyj aplikacji mobilnej lub komputera z czytnikiem</p>
                </div>
                <span className="arrow-icon">›</span>
              </Link>

              <Link to="#" className="login-option">
                <div className="option-icon eu"></div>
                <div className="option-content">
                  <h3>USE eID</h3>
                  <p>Use your National eID to access online services</p>
                </div>
                <span className="arrow-icon">›</span>
              </Link>
            </div>
          </div>

          <div className="login-sidebar">
            <div className="sidebar-content">
              <div className="sidebar-header">
                <span className="mail-icon">✉️</span>
                <h2>e-Doręczenia</h2>
              </div>
              <div className="sidebar-image">
                <img src="/assets/login-illustration.jpg" alt="e-Doręczenia illustration" />
              </div>
              <h3>Załóż skrzynkę e-Doręczeń</h3>
              <p>odbieraj polecony z urzędu przez Internet</p>
              <Link to="#" className="sidebar-button">
                Przejdź do e-Doręczeń
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="login-footer">
        <div className="footer-links">
          <Link to="#">Polityka cookies</Link>
          <Link to="#">Warunki korzystania</Link>
          <Link to="#">Klauzula RODO</Link>
          <Link to="#">Deklaracja dostępności</Link>
        </div>
      </footer>
    </div>
  )
}

export default Login 