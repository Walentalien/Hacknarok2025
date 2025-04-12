import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
} from '@mui/material';
import axios from 'axios';

const Forum = () => {
  const [topics, setTopics] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    city: '',
    district: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Mock data - in real app, this would fetch from the backend
    setTopics([
      {
        id: 1,
        title: 'Improving Public Transportation',
        description: 'Discussion about public transport improvements in the city',
        category: 'infrastructure',
        city: 'Warsaw',
        district: 'Mokotow',
        createdAt: new Date(),
      },
      {
        id: 2,
        title: 'School Renovation Project',
        description: 'Planning the renovation of local schools',
        category: 'education',
        city: 'Warsaw',
        district: 'Praga',
        createdAt: new Date(),
      },
    ]);
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch = topic.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      topic.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = !filters.category || topic.category === filters.category;
    const matchesCity = !filters.city || topic.city === filters.city;
    const matchesDistrict = !filters.district || topic.district === filters.district;

    return matchesSearch && matchesCategory && matchesCity && matchesDistrict;
  });

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', p: 2 }}>
      <Box sx={{ mb: 4, width: '100%' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Community Forum
        </Typography>
        <Grid container spacing={2} sx={{ mb: 3, width: '100%' }}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Search"
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                label="Category"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="government">Government</MenuItem>
                <MenuItem value="education">Education</MenuItem>
                <MenuItem value="infrastructure">Infrastructure</MenuItem>
                <MenuItem value="health">Health</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>City</InputLabel>
              <Select
                name="city"
                value={filters.city}
                onChange={handleFilterChange}
                label="City"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Warsaw">Warsaw</MenuItem>
                <MenuItem value="Krakow">Krakow</MenuItem>
                <MenuItem value="Gdansk">Gdansk</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>District</InputLabel>
              <Select
                name="district"
                value={filters.district}
                onChange={handleFilterChange}
                label="District"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Mokotow">Mokotow</MenuItem>
                <MenuItem value="Praga">Praga</MenuItem>
                <MenuItem value="Srodmiescie">Srodmiescie</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3} sx={{ width: '100%' }}>
        {filteredTopics.map((topic) => (
          <Grid item xs={12} key={topic.id}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {topic.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {topic.category} • {topic.city} • {topic.district}
                </Typography>
                <Typography variant="body1" paragraph>
                  {topic.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/topic/${topic.id}`)}
                >
                  View Discussion
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Forum; 