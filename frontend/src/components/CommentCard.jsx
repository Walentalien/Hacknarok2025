import React from 'react';
import UserAvatar from './UserAvatar';
import Rating from './Rating';

const CommentCard = ({ author, content, score, backgroundColor }) => {
  return (
    <div className="bg-white p-4 mb-2">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <UserAvatar backgroundColor={backgroundColor} />
          <h3 className="text-lg text-gray-800">{author}</h3>
        </div>
          <Rating score={score}/>
      </div>
      <div className="text-gray-700 leading-relaxed pl-3">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CommentCard; 