import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
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
          <button className="nav-icon-button">
            <PersonIcon />
          </button>
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