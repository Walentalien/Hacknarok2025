import React from 'react';
import UserAvatar from './UserAvatar';

const ForumPostPreview = ({ title, content, score, featuredComment }) => {
  return (
    <div className="bg-white rounded-lg mb-4 shadow-sm overflow-hidden">
      <div className="flex justify-between items-start p-6 border-b border-gray-100">
        <div className="flex-1 pr-6">
          <h2 className="text-lg font-medium text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 text-[0.95rem] leading-relaxed">{content}</p>
        </div>
        <div className="flex items-center gap-2 pl-4 border-l border-gray-100">
          <button className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-600 transition-colors">+</button>
          <span>{score}</span>
          <button className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-600 transition-colors">-</button>
        </div>
      </div>

      {featuredComment && (
        <div className="p-6 bg-gray-50 border-b border-gray-100">
          <h3 className="text-sm text-gray-600 uppercase tracking-wider mb-4">Wyróżniony komentarz:</h3>
          <div className="ml-4">
            <div className="flex items-center gap-3 mb-2">
              <UserAvatar backgroundColor={featuredComment.avatarColor} />
              <h4 className="text-purple-900 text-base font-medium">{featuredComment.author}</h4>
            </div>
            <p className="text-gray-600">{featuredComment.content}</p>
          </div>
        </div>
      )}

      <div className="flex justify-end gap-4 p-6">
        <button className="px-4 py-2 bg-purple-900 text-white rounded-lg font-medium hover:bg-purple-800 transition-colors">
          Przejdź do tematu
        </button>
        <button className="px-4 py-2 border border-purple-900 text-purple-900 rounded-lg font-medium hover:bg-purple-50 transition-colors">
          Dodaj do moich
        </button>
      </div>
    </div>
  );
};

export default ForumPostPreview; 