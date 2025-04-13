import React from 'react';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = ( {searchOpen, iconsOpen} ) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const is_authenticated = true; // todo
  const navigate = useNavigate();

  const handleLogin = () => {
    if (is_authenticated){
      // handle logout 
    }else{
      navigate('/login'); 
    }
  };

  const handleUser = () => {
    if (is_authenticated){
      navigate('/User');
    }else{
      navigate('/login'); 
    }
  };

  const handleChat = () => {
    if (is_authenticated){
      navigate('/Chat');
    }else{
      navigate('/login'); 
    }
  };


  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-[#0B0B66] text-white">
     <div className="grid grid-cols-2">

      <button className="p-2 hover:bg-white/10"
              onClick={()=>{navigate("/")}}
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

        </button>

       
     </div>
      
      {searchOpen ? (
          <div className="flex items-center w-3/5 max-w-lg bg-white px-2 py-1">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Szukaj..."
              className="text-black outline-none bg-transparent placeholder-gray-400 w-full"
            />
            <FaSearch size={18} className="text-black ml-2" />
          </div>
        ) : null}

      <div className="flex items-center gap-4">
        {iconsOpen ?
       <> <button className="p-2 hover:bg-white/10"
       onClick={handleChat}
       >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="p-2 hover:bg-white/10"
      onClick={handleUser}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button> </> : null}
        <button className="px-4 py-2 border border-white font-medium hover:bg-white/10 transition-colors"
          onClick={handleLogin}
        >
          {is_authenticated ? (
            <>Wyloguj</>
          ) : (<>Zaloguj</>)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;