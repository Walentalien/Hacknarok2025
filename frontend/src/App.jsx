import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Forum from './pages/forum';
import Login from './pages/login';
import Layout from './pages/layout';
import PersonalCabinet from './pages/PersonalCabinet';
import Search from './pages/search';
import Messages from './pages/messages';
import Contact from './pages/contact';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />        
            <Route path="/forum" element={<Forum />} /> 
            <Route path="/forum/post/:id" element={<Forum />} />
            <Route 
              path="/forum/create" 
              element={
                <ProtectedRoute>
                  <Forum />
                </ProtectedRoute>
              } 
            />
            <Route path="/search" element={<Search />} />
            <Route 
              path="/messages" 
              element={
                <ProtectedRoute>
                  <Messages />
                </ProtectedRoute>
              } 
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/personal-cabinet" 
              element={
                <ProtectedRoute>
                  <PersonalCabinet />
                </ProtectedRoute>
              } 
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;
