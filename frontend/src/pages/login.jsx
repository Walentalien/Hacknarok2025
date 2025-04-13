import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../components/Toast';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      addToast('Login successful!', 'success');
      navigate('/cabinet');
    } catch (error) {
      addToast(error.message || 'Failed to login', 'error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
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

            {/* Hidden form for email/password */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md hidden"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md hidden"
                placeholder="Password"
              />
              
              {/* Login button */}
              <button
                type="submit"
                className="w-full bg-[#0B0B66] text-white py-3 text-lg font-medium hover:bg-[#0B0B88] transition-colors"
              >
                Zaloguj
              </button>

              <button
  type="submit"
  className="w-full bg-[#0B0B66] text-white py-3 text-lg font-medium hover:bg-[#0B0B88] transition-colors"
>
  Zaloguj
</button>
            </form>

            {/* Description text */}
            <p className="text-gray-600 text-sm text-center max-w-sm mx-auto">
              W celu weryfikacji użytkownika, należy zalogować się do systemu przy pomocy profilu zaufanego
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 