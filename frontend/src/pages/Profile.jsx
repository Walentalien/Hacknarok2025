import { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userTopics, setUserTopics] = useState([]);

  useEffect(() => {
    // Mock data - in real app, this would fetch from the backend
    const mockUser = {
      id: 1,
      username: 'johndoe',
      email: 'john@example.com',
      city: 'Warsaw',
      district: 'Mokotow',
      isVerified: true,
      isPublicFigure: false,
    };

    const mockTopics = [
      {
        id: 1,
        title: 'Improving Public Transportation',
        category: 'infrastructure',
        createdAt: new Date(),
      },
      {
        id: 2,
        title: 'School Renovation Project',
        category: 'education',
        createdAt: new Date(),
      },
    ];

    setUser(mockUser);
    setUserTopics(mockTopics);
  }, []);

  if (!user) return null;

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', p: 2 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                sx={{ width: 120, height: 120, mb: 2 }}
                alt={user.username}
              >
                {user.username[0].toUpperCase()}
              </Avatar>
              <Typography variant="h5" gutterBottom>
                {user.username}
              </Typography>
              {user.isVerified && (
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <VerifiedIcon color="primary" sx={{ mr: 1 }} />
                  <Typography color="primary">Verified User</Typography>
                </Box>
              )}
              <Button variant="outlined" color="primary">
                Edit Profile
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Username"
                  secondary={user.username}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary={user.email}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <LocationIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Location"
                  secondary={`${user.city}, ${user.district}`}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
        <Typography variant="h6" gutterBottom>
          My Topics
        </Typography>
        <List>
          {userTopics.map((topic) => (
            <ListItem key={topic.id}>
              <ListItemText
                primary={topic.title}
                secondary={`${topic.category} • ${new Date(topic.createdAt).toLocaleDateString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Profile; 