// Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}