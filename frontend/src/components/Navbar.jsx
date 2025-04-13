import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-purple-900 text-white">
      <button 
        className="p-2 hover:bg-white/10 rounded-lg"
        onClick={() => navigate('/')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="flex items-center gap-4">
        <button 
          className="p-2 hover:bg-white/10 rounded-lg"
          onClick={() => navigate('/search')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {isAuthenticated && (
          <>
            <Link 
              to="/messages"
              className="p-2 hover:bg-white/10 rounded-lg relative"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {/* Notification dot - you can make this dynamic based on unread messages */}
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </Link>

            <Link 
              to="/personal-cabinet"
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </>
        )}

        {location.pathname !== '/' && (
          <button 
            className="p-2 hover:bg-white/10 rounded-lg"
            onClick={handleBack}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {isAuthenticated ? (
          <button 
            onClick={logout}
            className="px-4 py-2 border border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Wyloguj
          </button>
        ) : (
          <Link 
            to="/login"
            className="px-4 py-2 border border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Zaloguj
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;