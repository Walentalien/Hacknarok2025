import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PersonalCabinet = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  const user = {
    name: "Jan Kowalski",
    email: "jan.kowalski@example.com",
    joinDate: "Styczeń 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JanKowalski",
    stats: {
      posts: 23,
      comments: 156,
      reactions: 489,
      reputation: 1250
    },
    notifications: [
      { id: 1, type: 'comment', text: 'Nowa odpowiedź na twój post o chodniku', time: '2 godziny temu' },
      { id: 2, type: 'like', text: 'Twój komentarz otrzymał 5 nowych polubień', time: '5 godzin temu' },
    ],
    activities: [
      { id: 1, type: 'post', title: 'Chodnik na ulicy Mikołaja Kopernika', status: 'W trakcie', date: '2024-03-15' },
      { id: 2, type: 'comment', title: 'Odpowiedź na temat parku', status: 'Rozwiązane', date: '2024-03-14' },
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start gap-6">
              <img 
                src={user.avatar} 
                alt="Avatar" 
                className="w-24 h-24 rounded-full border-4 border-purple-100"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">Dołączył: {user.joinDate}</p>
                
                <div className="mt-4 grid grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-900">{user.stats.posts}</div>
                    <div className="text-sm text-gray-600">Posty</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-900">{user.stats.comments}</div>
                    <div className="text-sm text-gray-600">Komentarze</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-900">{user.stats.reactions}</div>
                    <div className="text-sm text-gray-600">Reakcje</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-900">{user.stats.reputation}</div>
                    <div className="text-sm text-gray-600">Reputacja</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'notifications':
        return (
          <div className="space-y-4">
            {user.notifications.map(notification => (
              <div key={notification.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  notification.type === 'comment' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                }`}>
                  {notification.type === 'comment' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">{notification.text}</p>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'activities':
        return (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typ</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tytuł</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {user.activities.map(activity => (
                  <tr key={activity.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        activity.type === 'post' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {activity.type === 'post' ? 'Post' : 'Komentarz'}
                      </span>
                    </td>
                    <td className="px-6 py-4">{activity.title}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        activity.status === 'Rozwiązane' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {activity.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Panel użytkownika</h1>
        <p className="text-gray-600">Zarządzaj swoim profilem i śledź aktywność</p>
      </div>

      <div className="mb-6">
        <nav className="flex space-x-4">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'profile'
                ? 'bg-purple-900 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Profil
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'notifications'
                ? 'bg-purple-900 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Powiadomienia
          </button>
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'activities'
                ? 'bg-purple-900 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Aktywność
          </button>
        </nav>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default PersonalCabinet; 