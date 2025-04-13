import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">O Nas</h3>
            <p className="text-gray-300">
              Jesteśmy polską firmą technologiczną, która tworzy innowacyjne rozwiązania dla naszych klientów.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Strona Główna</a></li>
              <li><a href="/forum" className="text-gray-300 hover:text-white transition-colors">Forum</a></li>
              <li><a href="/kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: kontakt@example.pl</li>
              <li>Tel: +48 123 456 789</li>
              <li>Adres: ul. Krakowska 123, 30-001 Kraków</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400">© 2025 Twoja Firma. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 