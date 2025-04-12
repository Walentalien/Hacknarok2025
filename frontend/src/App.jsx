import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Discussion from './pages/Discussion'
import Layout from './components/Layout'
import './App.css'
import Landing from './pages/Landing'

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <PrivateRoute>
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <Layout>
              <Profile />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/discussion/:id" element={
          <PrivateRoute>
            <Layout>
              <Discussion />
            </Layout>
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App;
