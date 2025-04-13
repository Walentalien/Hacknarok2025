import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export default function Comment({ comment }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
          {comment.author.username[0].toUpperCase()}
        </div>
        <div className="ml-3">
          <span className="font-medium">{comment.author.username}</span>
          <span className="text-gray-500 text-sm ml-2">
            {formatDistanceToNow(new Date(comment.createdAt))} ago
          </span>
        </div>
      </div>
      <p className="text-gray-700 ml-11">{comment.content}</p>
      <div className="mt-2 ml-11 flex items-center gap-4 text-gray-500 text-sm">
        <button className="flex items-center gap-1 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          <span>{comment.likes || 0}</span>
        </button>
        <button className="hover:text-gray-700">Reply</button>
      </div>
    </div>
  );
}