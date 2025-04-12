import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mock successful login with any credentials
    const mockUser = {
      id: 'mock-user-id',
      username: formData.username,
      email: `${formData.username}@example.com`,
      city: 'Warsaw',
      district: 'Mokotow',
      isVerified: true,
      isPublicFigure: false,
      mObywatelData: {
        pesel: "12345678901",
        firstName: formData.username,
        lastName: "Kowalski",
        city: "Warsaw",
        district: "Mokotow",
        street: "ul. Przykładowa 1",
        postalCode: "00-001",
        isVerified: true
      }
    };

    // Store mock data in localStorage
    localStorage.setItem('token', 'mock-token-123');
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    // Navigate to home page
    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="info-banner">
        <span>Strona informacyjna portalu</span>
        <Link to="/" className="info-banner-link">Przejdź do strony</Link>
      </div>

      <header className="header">
        <div className="header-left">
          <button className="menu-button" aria-label="Menu">
            <MenuIcon />
          </button>
          <div className="logo-container">
            <img src="/polish-eagle.png" alt="Godło Polski" className="polish-eagle" />
            <span className="gov-text">Gov.pl</span>
            <div className="separator"></div>
            <span className="service-name">Serwis Rzeczypospolitej Polskiej</span>
          </div>
        </div>
        <div className="header-right">
          <Link to="/login" className="login-link">
            Zaloguj
          </Link>
          <img src="/eu-flag.png" alt="Flaga UE" className="eu-flag" />
        </div>
      </header>

      <main className="main-content">
        <h1>Witamy na forum</h1>
        
        <div className="login-box">
          <h2>Logowanie</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nazwa użytkownika"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Hasło"
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Zaloguj
            </button>
          </form>
        </div>

        <div className="mobywatel-links">
          <Link to="#" className="mobywatel-link">mObywatel w przeglądarce</Link>
          <Link to="#" className="mobywatel-link">mObywatel w aplikacji</Link>
        </div>
      </main>
    </div>
  );
};

export default Login;