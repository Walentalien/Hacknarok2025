import React from 'react';
import './Discussion.css';

const Discussion = () => {
  return (
    <div className="discussion-container">
      <h1>Chodnik na ulicy Mikołaja Kopernika - łatanie dziar</h1>
      
      <div className="discussion-content">
        <p>
          Czy wiadomo coś na temat planowanych prac naprawczych chodnika przy ulicy Mikołaja Kopernika? 
          Chodnik jest w bardzo złym stanie – pełen dziar, pęknięć i nierówności, co stanowi realne 
          zagrożenie, zwłaszcza dla osób starszych i dzieci. Korzystają z niego codziennie piesi, 
          a w takim stanie trudno bezpiecznie się poruszać. Czy ktoś już to zgłaszał do urzędu lub wie, 
          czy są planowane jakieś działania w tej sprawie?
        </p>
      </div>

      <h2>Dodaj komentarz...</h2>

      <div className="comments-section">
        <div className="comment">
          <div className="comment-header">
            <strong>Marek Nowak</strong>
          </div>
          <div className="comment-text">
            Zgłaszałem to do urzędu kilka miesięcy temu, ale jak na razie cisza. Może warto ponowić zgłoszenie grupowo?
          </div>
          <div className="comment-votes">
            <span className="votes">+ 120/8 →</span>
          </div>
        </div>

        <div className="comment">
          <div className="comment-header">
            <strong>Maria Drozd</strong>
          </div>
          <div className="comment-text">
            Też zauważyłem ten problem, ciężko tamtędy przejść z wózkiem. Może petycja coś by dała?
          </div>
          <div className="comment-votes">
            <span className="votes">+ 88/13 →</span>
          </div>
        </div>

        <div className="comment">
          <div className="comment-header">
            <strong>Mariusz Polak</strong>
          </div>
          <div className="comment-text">
            Słyszałem, że mają coś robić w wakacje, ale nie wiem, czy chodziło o chodnik czy tylko drogę.
          </div>
          <div className="comment-votes">
            <span className="votes">+ 54/23 →</span>
          </div>
        </div>
      </div>

      <div className="comment-form">
        <textarea placeholder="Napisz swój komentarz..."></textarea>
        <button className="submit-button">wyślij</button>
      </div>
    </div>
  );
};

export default Discussion;