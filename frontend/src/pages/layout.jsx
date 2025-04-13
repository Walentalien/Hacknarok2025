// Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="w-4/5 m-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}