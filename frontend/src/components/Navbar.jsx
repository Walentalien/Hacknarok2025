import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useAdmin } from '../contexts/AdminContext';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { isAdmin } = useAdmin();
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-purple-900 dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold">Forum App</Link>
            {location.pathname !== '/' && (
              <button
                onClick={handleBack}
                className="p-2 rounded-lg hover:bg-purple-800 dark:hover:bg-gray-700"
              >
                Back
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-purple-800 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>

            {isAuthenticated && (
              <>
                <Link
                  to="/messages"
                  className="p-2 rounded-lg hover:bg-purple-800 dark:hover:bg-gray-700"
                >
                  Messages
                </Link>
                <Link
                  to="/cabinet"
                  className="p-2 rounded-lg hover:bg-purple-800 dark:hover:bg-gray-700"
                >
                  Cabinet
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="p-2 rounded-lg hover:bg-purple-800 dark:hover:bg-gray-700"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg hover:bg-purple-800 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </>
            )}
            {!isAuthenticated && (
              <Link
                to="/login"
                className="p-2 rounded-lg hover:bg-purple-800 dark:hover:bg-gray-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;