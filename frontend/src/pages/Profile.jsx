import { useState, useEffect } from 'react';
import {
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userTopics, setUserTopics] = useState([]);

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }

    // Mock topics data
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

    setUserTopics(mockTopics);
  }, []);

  if (!user) return null;

  return (
    <div className="profile-container">
      <div className="profile-paper">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.username[0].toUpperCase()}
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{user.username}</h1>
            {user.isVerified && (
              <div className="profile-verified">
                <VerifiedIcon />
                <span>Verified User</span>
              </div>
            )}
            <button className="profile-edit-button">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-section">
            <h2 className="profile-section-title">Personal Information</h2>
            <ul className="profile-list">
              <li className="profile-list-item">
                <PersonIcon className="profile-list-icon" />
                <div className="profile-list-content">
                  <div className="profile-list-label">Username</div>
                  <div className="profile-list-value">{user.username}</div>
                </div>
              </li>
              <li className="profile-list-item">
                <EmailIcon className="profile-list-icon" />
                <div className="profile-list-content">
                  <div className="profile-list-label">Email</div>
                  <div className="profile-list-value">{user.email}</div>
                </div>
              </li>
              <li className="profile-list-item">
                <LocationIcon className="profile-list-icon" />
                <div className="profile-list-content">
                  <div className="profile-list-label">Location</div>
                  <div className="profile-list-value">{user.city}, {user.district}</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">mObywatel Information</h2>
            <ul className="profile-list">
              <li className="profile-list-item">
                <PersonIcon className="profile-list-icon" />
                <div className="profile-list-content">
                  <div className="profile-list-label">Full Name</div>
                  <div className="profile-list-value">
                    {user.mObywatelData.firstName} {user.mObywatelData.lastName}
                  </div>
                </div>
              </li>
              <li className="profile-list-item">
                <LocationIcon className="profile-list-icon" />
                <div className="profile-list-content">
                  <div className="profile-list-label">Address</div>
                  <div className="profile-list-value">
                    {user.mObywatelData.street}, {user.mObywatelData.postalCode} {user.mObywatelData.city}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="profile-paper profile-topics">
        <h2 className="profile-section-title">My Topics</h2>
        <div className="profile-list">
          {userTopics.map((topic) => (
            <div key={topic.id} className="topic-item">
              <div className="topic-title">{topic.title}</div>
              <div className="topic-meta">
                {topic.category} • {new Date(topic.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;