import React from 'react';

const CommentCard = ({ author, content, score, backgroundColor, createdAt }) => {
  const [likes, dislikes] = score.split('/').map(Number);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-3">
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor }}
        >
          {author[0].toUpperCase()}
        </div>
        <div className="ml-3">
          <span className="font-medium text-gray-900">{author}</span>
          <span className="text-gray-500 text-sm ml-2">
            {new Date(createdAt).toLocaleDateString('pl-PL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </span>
        </div>
      </div>
      
      <p className="text-gray-700 ml-11 mb-3">{content}</p>
      
      <div className="flex items-center gap-4 ml-11 text-gray-500">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span>{likes}</span>
          </button>
          <span>/</span>
          <button className="flex items-center gap-1 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span>{dislikes}</span>
          </button>
        </div>
        <button className="text-sm hover:text-gray-700 transition-colors">
          Odpowiedz
        </button>
      </div>
    </div>
  );
};

export default CommentCard; 