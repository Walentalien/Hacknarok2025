import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ForumPost from './ForumPost';
import ForumPostPreview from './ForumPostPreview';
import CommentCard from './CommentCard';

export default function Forum() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    if (location.pathname === '/forum') {
      fetchPosts();
    } else if (id) {
      fetchPost(id);
      fetchComments(id);
    }
  }, [location.pathname, id]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchPost = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`);
      const data = await response.json();
      setCurrentPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}/comments`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newPost,
          authorId: user.id,
        }),
      });
      const data = await response.json();
      navigate(`/forum/post/${data.id}`);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newComment,
          authorId: user.id,
          postId: id,
        }),
      });
      const data = await response.json();
      setComments([...comments, data]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (location.pathname === '/forum/create') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
        <form onSubmit={handleCreatePost} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="w-full p-2 border rounded-lg h-32"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Create Post
          </button>
        </form>
      </div>
    );
  }

  if (id && currentPost) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <ForumPost post={currentPost} />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <div className="space-y-4">
            {comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
          {user && (
            <form onSubmit={handleAddComment} className="mt-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Add a comment..."
                required
              />
              <button
                type="submit"
                className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Add Comment
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Forum</h1>
        {user && (
          <button
            onClick={() => navigate('/forum/create')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Create Post
          </button>
        )}
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <ForumPostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
} 