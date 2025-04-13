import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Forum from './pages/forum';
import Login from './pages/login';
import Layout from './pages/layout';
import User from './pages/user';
import Chat from './pages/chat';

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
        <Route path="/" element={<Layout searchOpen = { true } iconsOpen={true}/>}>
          <Route index element={<Home />} />        
          <Route path="/forum/:id" element={<Forum />} />
        </Route>
        <Route path="/" element={<Layout searchOpen = { false } iconsOpen={true}/>}>
          <Route path="/chat" element={<Chat />} /> 
          <Route path="/user" element={<User />} />           
        </Route>
        <Route path="/" element={<Layout searchOpen = { false } iconsOpen={false}/>}>
          <Route path="/login" element={<Login />} />          
        </Route>
  

      </Routes>
    </Router>
  )
}

export default App;
