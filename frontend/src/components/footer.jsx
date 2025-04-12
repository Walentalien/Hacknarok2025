import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>O Nas</h3>
            <p>
              Jesteśmy polską firmą technologiczną, która tworzy innowacyjne rozwiązania dla naszych klientów.
            </p>
          </div>
          <div className="footer-section">
            <h3>Szybkie Linki</h3>
            <ul>
              <li><a href="/">Strona Główna</a></li>
              <li><a href="/forum">Forum</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Kontakt</h3>
            <ul>
              <li>Email: kontakt@example.pl</li>
              <li>Tel: +48 123 456 789</li>
              <li>Adres: ul. Krakowska 123, 30-001 Kraków</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Twoja Firma. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 