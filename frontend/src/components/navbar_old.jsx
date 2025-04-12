import { useState } from 'react';
import { FaBars, FaSearch, FaCommentDots, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-[#0B0B66] text-white p-3">
      {/* Hamburger Menu */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FaBars size={24} />
      </button>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <FaSearch size={20} className="cursor-pointer" />
        <FaCommentDots size={22} className="cursor-pointer" />
        
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={30} className="text-cyan-400" />
          <span>Wyloguj</span>
        </div>
      </div>
      </div>
  );
}
