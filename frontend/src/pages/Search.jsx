import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="search-page">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <button className="menu-button">
          <MenuIcon />
        </button>
        <div className="nav-right">
          <Link to="/search" className="nav-icon-button active">
            <SearchIcon />
          </Link>
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
      <main className="search-content">
        <div className="search-container">
          <div className="search-header">
            <h1>Wyszukiwarka</h1>
          </div>

          <div className="search-box">
            <div className="search-input-wrapper">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                placeholder="Wyszukaj..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Category Buttons */}
          <div className="category-buttons">
            <button className="category-button">W mojej okolicy</button>
            <button className="category-button">Polityka</button>
            <button className="category-button">Infrastruktura</button>
            <button className="category-button">Kultura</button>
            <button className="category-button">Sport</button>
          </div>

          {/* Search Results */}
          <div className="search-results">
            {/* Example results - these would be populated dynamically */}
            <div className="result-item">
              <h3>Chodnik na ulicy Mikołaja Kopernika</h3>
              <p>Dyskusja na temat stanu chodnika i planowanych napraw...</p>
              <div className="result-meta">
                <span>Infrastruktura</span>
                <span>•</span>
                <span>23.03.2024</span>
              </div>
            </div>

            <div className="result-item">
              <h3>Nowy plac zabaw w parku miejskim</h3>
              <p>Konsultacje społeczne dotyczące budowy placu zabaw...</p>
              <div className="result-meta">
                <span>W mojej okolicy</span>
                <span>•</span>
                <span>22.03.2024</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;