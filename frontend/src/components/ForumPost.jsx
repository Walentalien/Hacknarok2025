import React from 'react';
import UserAvatar from './UserAvatar';

const ForumPost = ({ title, content, author, backgroundColor }) => {
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <UserAvatar backgroundColor={backgroundColor} />
          <h2 className="text-lg text-gray-800 m-0">{author}</h2>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl text-gray-900 m-0">{title}</h1>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default ForumPost; 