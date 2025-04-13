import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../components/Toast';
import { useTheme } from '../contexts/ThemeContext';
import { Navigate } from 'react-router-dom';

export default function Cabinet() {
  const { user, isAuthenticated, updateProfile } = useAuth();
  const { addToast } = useToast();
  const { darkMode } = useTheme();
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    if (formData.newPassword && formData.newPassword !== formData.confirmNewPassword) {
      addToast('New passwords do not match', 'error');
      return;
    }

    try {
      await updateProfile(formData);
      addToast('Profile updated successfully', 'success');
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      }));
    } catch (error) {
      addToast(error.message || 'Failed to update profile', 'error');
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmation !== 'I WANT MY ACCOUNT TO BE DELETED') {
      addToast('Please type the correct confirmation phrase', 'error');
      return;
    }

    try {
      // Add your delete account logic here
      addToast('Account deleted successfully', 'success');
      // Redirect to home page or login page after deletion
    } catch (error) {
      addToast(error.message || 'Failed to delete account', 'error');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {/* Profile Header */}
            <div className="relative h-48 bg-purple-600">
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-purple-600">
                    {user?.username?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">{user?.username}</h1>
                    <p className="text-gray-200">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6">
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm
                        ${darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500' 
                          : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm
                        ${darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500' 
                          : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm
                        ${darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500' 
                          : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm
                        ${darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500' 
                          : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmNewPassword"
                      value={formData.confirmNewPassword}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm
                        ${darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500' 
                          : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'}`}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowDeleteModal(true)}
                    className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    Delete Account
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg max-w-md w-full`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Delete Account</h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              To delete your account, please type "I WANT MY ACCOUNT TO BE DELETED"
            </p>
            <input
              type="text"
              value={deleteConfirmation}
              onChange={(e) => setDeleteConfirmation(e.target.value)}
              className={`w-full p-2 border rounded mb-4 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'border-gray-300'
              }`}
              placeholder="Type confirmation phrase"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteConfirmation('');
                }}
                className={`px-4 py-2 rounded ${
                  darkMode 
                    ? 'bg-gray-600 text-white hover:bg-gray-500' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 