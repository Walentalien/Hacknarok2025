import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock successful login with any credentials
    const mockUser = {
      id: 'mock-user-id',
      username: loginData.username,
      email: `${loginData.username}@example.com`,
      city: 'Warsaw',
      district: 'Mokotow',
      isVerified: true,
      isPublicFigure: false,
      mObywatelData: {
        pesel: "12345678901",
        firstName: loginData.username,
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
    
    // Navigate to profile page
    navigate('/profile');
  };

  return (
    <div className="login-page">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <button className="menu-button">
          <MenuIcon />
        </button>
        <div className="nav-right">
          <Link to="/search" className="nav-icon-button">
            <SearchIcon />
          </Link>
          <button className="nav-icon-button">
            <ChatIcon />
          </button>
          <Link to="/profile" className="nav-icon-button">
            <PersonIcon />
          </Link>
          <Link to="/login" className="login-button active">
            Zaloguj
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="login-content">
        <div className="login-container">
          <h1>Logowanie</h1>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                placeholder="Login"
                className="login-input"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Hasło"
                className="login-input"
              />
              <Link to="/forgot-password" className="forgot-password">
                Nie pamiętasz hasła?
              </Link>
            </div>

            <button type="submit" className="submit-button">
              Zaloguj
            </button>

            <div className="login-divider">
              <span>Lub użyj profilu zaufanego</span>
            </div>

            <button type="button" className="trusted-profile-button">
              Login
              <img src="/trusted-profile-logo.svg" alt="Profil zaufany" className="trusted-profile-icon" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;