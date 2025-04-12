import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
} from '@mui/material';
import { io } from 'socket.io-client';

const Topic = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Mock data - in real app, this would fetch from the backend
    setTopic({
      id: parseInt(id),
      title: 'Improving Public Transportation',
      description: 'Discussion about public transport improvements in the city',
      category: 'infrastructure',
      city: 'Warsaw',
      district: 'Mokotow',
      createdAt: new Date(),
    });

    setPosts([
      {
        id: 1,
        content: 'I think we need more bus lanes in the city center.',
        author: 'John Doe',
        createdAt: new Date(),
      },
      {
        id: 2,
        content: 'The tram system could be expanded to cover more areas.',
        author: 'Jane Smith',
        createdAt: new Date(),
      },
    ]);

    // Connect to WebSocket
    const newSocket = io('http://localhost:3000');
    newSocket.emit('join-topic', { topicId: id });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [id]);

  useEffect(() => {
    if (socket) {
      socket.on('post-added', (data) => {
        setPosts((prevPosts) => [...prevPosts, data]);
      });
    }
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      content: newPost,
      author: 'Current User', // In real app, this would be the logged-in user
      createdAt: new Date(),
    };

    // In real app, this would send to the backend
    socket.emit('new-post', { topicId: id, post });
    setNewPost('');
  };

  if (!topic) return null;

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', p: 2 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, width: '100%' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {topic.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {topic.category} • {topic.city} • {topic.district}
        </Typography>
        <Typography variant="body1" paragraph>
          {topic.description}
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
        <Typography variant="h6" gutterBottom>
          Discussion
        </Typography>
        <List>
          {posts.map((post, index) => (
            <Box key={post.id}>
              <ListItem alignItems="flex-start">
                <Avatar sx={{ mr: 2 }}>{post.author[0]}</Avatar>
                <ListItemText
                  primary={post.author}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {post.content}
                      </Typography>
                      <Typography variant="caption" display="block">
                        {new Date(post.createdAt).toLocaleString()}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < posts.length - 1 && <Divider variant="inset" component="li" />}
            </Box>
          ))}
        </List>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Add your comment..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Post Comment
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Topic; 