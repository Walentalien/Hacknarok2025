import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Forum from './pages/forum';
import Login from './pages/login';
import Layout from './pages/layout';


function App() {

  // todo
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout searchOpen = {true} />}>
          <Route index element={<Home />} />        
          <Route path="/forum" element={<Forum />} /> 
        </Route>
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  )
}

export default App;
