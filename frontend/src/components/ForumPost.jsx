import React from 'react';
import UserAvatar from './UserAvatar';
import Rating from './Rating';

const ForumPost = ({ title, content, author, backgroundColor,score }) => {
  return (
    <div className="bg-white p-8 mb-2">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4 w-full">
          <UserAvatar backgroundColor={backgroundColor} />
          <h2 className="text-lg text-gray-800 m-0">{author}</h2>
          
        </div>
        <Rating className="justify-self-end self-end" score={"122/2"}/>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-2xl text-gray-800 m-0 ml-1">{title}</h1>
        <p className="text-gray-700 leading-relaxed mt-1">{content}</p>
      </div>
    </div>
  );
};

export default ForumPost; 