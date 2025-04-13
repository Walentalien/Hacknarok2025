import { useState } from 'react';
import { FaBars, FaSearch, FaCommentDots, FaUserCircle } from 'react-icons/fa';

export default function Navbar_Inp(searchOpen) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="flex items-center justify-between bg-[#0B0B66] text-white p-3">
      
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FaBars size={24} />
      </button>

      {searchOpen ? (
          <div className="flex items-center w-lg bg-white rounded-md px-2 py-1 font-black">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Wyszukaj na forum..."
              className="text-black outline-none bg-transparent w-lg placeholder-gray-400"
            />
            <FaSearch size={18} className="text-black ml-2" />
          </div>
        ) : null}

      <div className="flex items-center gap-6">
        
        

        <FaCommentDots size={22} className="cursor-pointer" />

        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={30} className="text-cyan-400" />
          <span>Wyloguj</span>
        </div>
      </div>
    </div>
  );
}