import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const AdminContext = createContext();

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@admin.com',
  password: 'admin123'
};

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // Check if current user is admin
    if (user?.email === ADMIN_CREDENTIALS.email) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const checkAdminCredentials = (email, password) => {
    return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;
  };

  const value = {
    isAdmin,
    checkAdminCredentials,
    ADMIN_CREDENTIALS
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
} 