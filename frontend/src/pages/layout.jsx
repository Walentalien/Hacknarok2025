// Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ searchOpen, iconsOpen }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchOpen = {searchOpen} iconsOpen = {iconsOpen}/>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 mt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}