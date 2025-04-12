import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      title: 'Temat nr 1',
      description: 'Opis tematu nr 1',
      location: 'Toruń',
      date: '2024-03-23',
    },
    {
      id: 2,
      title: 'Temat nr 2',
      description: 'Opis tematu nr 2',
      location: 'Warszawa',
      date: '2024-03-22',
    },
  ]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to search for topics
    console.log('Searching for:', searchQuery);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="search-page">
      <header className="search-header">
        <div className="header-left">
          <button className="menu-button" aria-label="Menu">
            <MenuIcon />
          </button>
          <h1 className="location-title">Wyszukiwarka</h1>
        </div>
        <div className="header-right">
          <button className="icon-button">
            <ChatIcon />
          </button>
          <button className="icon-button">
            <AccountCircleIcon />
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Wyloguj
          </button>
        </div>
      </header>

      <main className="search-content">
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-container">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                placeholder="Wyszukaj temat..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button type="button" className="filter-button">
              <FilterListIcon />
              Filtry
            </button>
          </form>

          <div className="search-results">
            {searchResults.map((result) => (
              <div key={result.id} className="result-item">
                <h3>{result.title}</h3>
                <p>{result.description}</p>
                <div className="result-meta">
                  <span>{result.location}</span>
                  <span>{result.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="search-sidebar">
          <div className="filter-section">
            <h2>Filtry</h2>
            <div className="filter-group">
              <h3>Lokalizacja</h3>
              <label className="filter-checkbox">
                <input type="checkbox" /> Toruń
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Warszawa
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Kraków
              </label>
            </div>
            <div className="filter-group">
              <h3>Data</h3>
              <label className="filter-checkbox">
                <input type="checkbox" /> Ostatni tydzień
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Ostatni miesiąc
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Ostatni rok
              </label>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Search;