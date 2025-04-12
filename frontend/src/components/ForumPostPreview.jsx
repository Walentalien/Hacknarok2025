import React from 'react';
import UserAvatar from './UserAvatar';
import './ForumPostPreview.css';

const ForumPostPreview = ({ title, content, score, featuredComment }) => {
  return (
    <div className="post-preview">
      <div className="post-preview-main">
        <div className="post-preview-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="post-preview-score">
          <button className="score-btn">+</button>
          <span>{score}</span>
          <button className="score-btn">-</button>
        </div>
      </div>

      {featuredComment && (
        <div className="featured-comment">
          <h3>Wyróżniony komentarz:</h3>
          <div className="comment-content">
            <div className="comment-author">
              <UserAvatar backgroundColor={featuredComment.avatarColor} />
              <h4>{featuredComment.author}</h4>
            </div>
            <p>{featuredComment.content}</p>
          </div>
        </div>
      )}

      <div className="post-actions">
        <button className="action-button primary">Przejdź do tematu</button>
        <button className="action-button secondary">Dodaj do moich</button>
      </div>
    </div>
  );
};

export default ForumPostPreview; 