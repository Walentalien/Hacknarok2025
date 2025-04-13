import React, { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="flex items-center max-w-2xl mx-auto bg-white rounded-lg px-4 py-2 shadow-md">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Wyszukaj na forum..."
        className="flex-1 text-gray-800 outline-none bg-transparent placeholder-gray-400"
      />
      <button className="ml-2 text-gray-600 hover:text-gray-800">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Search; 