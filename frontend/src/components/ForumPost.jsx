import React from 'react';
import UserAvatar from './UserAvatar';
import './ForumPost.css';

const ForumPost = ({ title, content, author, backgroundColor }) => {
  return (
    <div className="forum-post">
      <div className="post-header">
        <div className="post-author">
          <UserAvatar backgroundColor={backgroundColor} />
          <h2>{author}</h2>
        </div>
      </div>
      <div className="post-content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ForumPost; 