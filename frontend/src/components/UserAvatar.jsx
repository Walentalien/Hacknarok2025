import React from 'react';
import './UserAvatar.css';

const UserAvatar = ({ backgroundColor = '#FFD700' }) => {
  return (
    <div 
      className="user-avatar"
      style={{ backgroundColor }}
    >
      <div className="avatar-face">
        <div className="avatar-eyes"></div>
      </div>
    </div>
  );
};

export default UserAvatar; 