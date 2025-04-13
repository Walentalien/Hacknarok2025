import { useState, useEffect } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../components/Toast';
import { Navigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { isAdmin } = useAdmin();
  const { addToast } = useToast();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');

  // Mock users data - replace with actual API calls
  useEffect(() => {
    setUsers([
      { id: 1, email: 'user1@example.com', role: 'user', status: 'active' },
      { id: 2, email: 'user2@example.com', role: 'user', status: 'inactive' },
      // Add more mock users as needed
    ]);
  }, []);

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  const handleDeleteUser = (user) => {
    if (deleteConfirmation !== 'I WANT MY ACCOUNT TO BE DELETED') {
      addToast('Please type the correct confirmation phrase', 'error');
      return;
    }

    // Mock delete user - replace with actual API call
    setUsers(users.filter(u => u.id !== user.id));
    addToast(`User ${user.email} has been deleted`, 'success');
    setSelectedUser(null);
    setDeleteConfirmation('');
  };

  const handleStatusChange = (userId, newStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    addToast(`User status updated successfully`, 'success');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Admin Dashboard</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">User Management</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {users.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={user.status}
                      onChange={(e) => handleStatusChange(user.id, e.target.value)}
                      className="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Delete User Account</h3>
            <p className="mb-4 dark:text-gray-300">
              To delete this account, please type "I WANT MY ACCOUNT TO BE DELETED"
            </p>
            <input
              type="text"
              value={deleteConfirmation}
              onChange={(e) => setDeleteConfirmation(e.target.value)}
              className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Type confirmation phrase"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setSelectedUser(null);
                  setDeleteConfirmation('');
                }}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 dark:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteUser(selectedUser)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 