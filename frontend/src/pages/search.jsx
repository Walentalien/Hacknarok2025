import React, { useState } from 'react';
import ForumPostPreview from '../components/ForumPostPreview';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock search results
  const mockPosts = [
    {
      id: '1',
      title: "Chodnik na ulicy Mikołaja Kopernika - łatanie dziur",
      content: "Czy wiadomo coś na temat planowanych prac naprawczych chodnika przy ulicy Mikołaja Kopernika? Chodnik jest w bardzo złym stanie...",
      score: "54/23",
      featuredComment: {
        author: "Marek Nowak",
        content: "Zgłaszałem to do urzędu kilka miesięcy temu, ale jak na razie cisza.",
        score: "32/1",
        avatarColor: "#FFD700"
      }
    },
    {
      id: '2',
      title: "Sadzenie drzew przy chodniku w ciągu ulicy Pięknej",
      content: "Propozycja zazieleniania naszej okolicy poprzez nasadzenia drzew wzdłuż chodnika...",
      score: "32/5"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, this would make an API call
    // For now, we'll just filter the mock data
    const results = mockPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Wyszukaj na forum..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#0B0B66] text-white rounded-lg font-semibold hover:bg-[#0B0B88] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Szukaj
          </button>
        </form>
      </div>

      {searchQuery && (
        <div className="mb-4">
          <h2 className="text-lg text-gray-600">
            {searchResults.length === 0 
              ? 'Nie znaleziono wyników'
              : `Znaleziono ${searchResults.length} wyników dla "${searchQuery}"`}
          </h2>
        </div>
      )}

      <div className="space-y-4">
        {searchResults.map(post => (
          <ForumPostPreview key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Search; 