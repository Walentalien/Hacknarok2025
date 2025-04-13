import React from 'react';
import UserAvatar from './UserAvatar';
import Rating from './Rating';
import CommentCard from './CommentCard';

const ForumPostPreview = ({ title, content, score, featuredComment }) => {
  return (
    <div className="bg-white mb-4 overflow-hidden">
      <div className="flex justify-between items-start p-6 border-b border-gray-100">
        <div className="flex-1 pr-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600">{content}</p>
        </div>
        <Rating score={score} />
      </div>

  
      {featuredComment ? (

        <div className="grid grid-cols-[2fr_1fr]">

          <div className='p-10'>
            <div className='outline outline-gray-400'>
            <CommentCard author={featuredComment.author} content={featuredComment.content} score={featuredComment.score} backgroundColor={featuredComment.avatarColor} />
            </div>
          </div>

          


          <div className="grid grid-rows-2 justify-items-center items-center p-10">
            <button className="px-4 py-2 bg-[#0B0B66] text-white w-fit h-fit font-medium hover:outline hover:outline-blue-300 transition-colors">
              Przejdź do tematu
            </button>
            <button className="px-4 py-2 border border-gray-400 w-fit h-fit font-medium hover:border-blue-300 transition-colors">
              Dodaj do moich
            </button>
          </div>
          </div>

         
      ) : (
      
      <div className="grid grid-cols-2 justify-items-center items-center p-10">
            <button className="px-4 py-2 bg-[#0B0B66] text-white w-fit h-fit font-medium hover:outline hover:outline-blue-300 transition-colors">
              Przejdź do tematu
            </button>
            <button className="px-4 py-2 border border-gray-400 w-fit h-fit font-medium hover:border-blue-300 transition-colors">
              Dodaj do moich
            </button>
          </div>
      
      )}
    </div>
  );
};

export default ForumPostPreview; 