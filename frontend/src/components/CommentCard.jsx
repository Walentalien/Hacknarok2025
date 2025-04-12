import React from 'react';
import UserAvatar from './UserAvatar';
import './CommentCard.css';

const CommentCard = ({ author, content, score, backgroundColor }) => {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <div className="comment-author">
          <UserAvatar backgroundColor={backgroundColor} />
          <h3>{author}</h3>
        </div>
        <div className="comment-score">
          <button className="score-btn">+</button>
          <span>{score}</span>
          <button className="score-btn">-</button>
        </div>
      </div>
      <div className="comment-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CommentCard; 