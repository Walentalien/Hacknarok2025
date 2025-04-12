import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import './Forum.css';

const Forum = () => {
  const [userTopics, setUserTopics] = useState([
    'Temat nr 1',
    'Temat nr 2',
    'Temat nr 3',
    'Temat nr 4'
  ]);
  const [localTopics, setLocalTopics] = useState([
    'Temat nr 1',
    'Temat nr 2'
  ]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="forum-page">
      <header className="forum-header">
        <div className="header-left">
          <button className="menu-button" aria-label="Menu">
            <MenuIcon />
          </button>
          <h1 className="location-title">Gmina Toruń</h1>
        </div>
        <div className="header-right">
          <button className="icon-button" onClick={() => navigate('/search')}>
            <SearchIcon />
          </button>
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

      <main className="forum-content">
        <div className="welcome-header">
          <h1>Witaj {user?.mObywatelData?.firstName} {user?.mObywatelData?.lastName} na Forum</h1>
        </div>

        <div className="content-grid">
          <div className="topics-section">
            <div className="section-header">
              <h2>Twoje tematy</h2>
              <button className="info-button" aria-label="Informacje">
                <InfoIcon />
              </button>
            </div>
            <div className="topics-list">
              {userTopics.map((topic, index) => (
                <div key={index} className="topic-item">
                  {topic}
                </div>
              ))}
            </div>

            <div className="section-header">
              <h2>Tematy w twojej okolicy</h2>
              <button className="info-button" aria-label="Informacje">
                <InfoIcon />
              </button>
            </div>
            <div className="topics-list">
              {localTopics.map((topic, index) => (
                <div key={index} className="topic-item">
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <aside className="map-section">
            <h2>Mapa</h2>
            <div className="map-container">
              <img src="/poland-map.svg" alt="Mapa Polski" className="poland-map" />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );  
};

export default Forum; 