import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

// Hardcoded admin user
const ADMIN_USER = {
  email: 'admin@admin.com',
  password: 'admin123',
  role: 'admin'
};

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdminCredentials = (email, password) => {
    if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const value = {
    isAdmin,
    setIsAdmin,
    checkAdminCredentials,
    ADMIN_USER
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