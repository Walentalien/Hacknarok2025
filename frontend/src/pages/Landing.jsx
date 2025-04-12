import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <button className="menu-button">
          <MenuIcon />
        </button>
        <div className="nav-right">
          <button className="nav-icon-button">
            <SearchIcon />
          </button>
          <button className="nav-icon-button">
            <ChatIcon />
          </button>
          <button className="nav-icon-button">
            <PersonIcon />
          </button>
          <Link to="/login" className="login-button">
            Zaloguj
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h1>Witaj na Forum</h1>
        
        {/* Category Buttons */}
        <div className="category-buttons">
          <button className="category-button">W mojej okolicy</button>
          <button className="category-button">Polityka</button>
          <button className="category-button">Infrastruktura</button>
          <button className="category-button">Kultura</button>
          <button className="category-button">Sport</button>
        </div>

        {/* Grid Toggle Button */}
        <button className="grid-toggle">
          <span className="grid-icon"></span>
        </button>
      </main>
    </div>
  );
};

export default Landing;