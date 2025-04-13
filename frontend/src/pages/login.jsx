import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication
    const mockUser = {
      id: 'mock-user-id',
      username: 'jan.kowalski',
      email: 'jan.kowalski@example.com',
      city: 'Warsaw',
      district: 'Mokotow',
      isVerified: true,
      isPublicFigure: false,
      mObywatelData: {
        pesel: "12345678901",
        firstName: "Jan",
        lastName: "Kowalski",
        city: "Warsaw",
        district: "Mokotow",
        street: "ul. Przykładowa 1",
        postalCode: "00-001"
      }
    };

    // Store mock token and user data
    localStorage.setItem('token', 'mock-jwt-token');
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    // Navigate to personal cabinet
    navigate('/personal-cabinet');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="p-8 w-full max-w-md">
          <div className="text-center space-y-6">
            {/* Login logo and text */}
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-4xl font-light">Login</h1>
              <div className="relative">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 12L25 20L15 28" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="1" y="1" width="38" height="38" stroke="#E5E7EB" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            {/* Subtitle */}
            <p className="text-gray-600 text-sm">
              użyj profilu zaufanego
            </p>

            {/* Login button */}
            <button 
              onClick={handleLogin}
              className="w-full bg-[#0B0B66] text-white py-3 text-lg font-medium hover:bg-[#0B0B88] transition-colors"
            >
              Zaloguj
            </button>

            {/* Description text */}
            <p className="text-gray-600 text-sm text-center max-w-sm mx-auto">
              W celu weryfikacji użytkownika, należy zalogować się do systemu przy pomocy profilu zaufanego
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 