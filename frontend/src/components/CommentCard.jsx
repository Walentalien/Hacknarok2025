import React from 'react';
import UserAvatar from './UserAvatar';

const CommentCard = ({ author, content, score, backgroundColor }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 my-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <UserAvatar backgroundColor={backgroundColor} />
          <h3 className="text-lg text-gray-800 m-0">{author}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-100 transition-colors">+</button>
          <span className="text-gray-600">{score}</span>
          <button className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-100 transition-colors">-</button>
        </div>
      </div>
      <div className="text-gray-600 leading-relaxed">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CommentCard; 