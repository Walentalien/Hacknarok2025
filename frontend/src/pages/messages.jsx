import React, { useState } from 'react';

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  // Mock conversations data
  const conversations = [
    {
      id: '1',
      user: {
        name: 'Maria Drozd',
        avatar: '#E0E0E0'
      },
      lastMessage: 'Dziękuję za informację o chodniku',
      timestamp: '14:30',
      unread: true
    },
    {
      id: '2',
      user: {
        name: 'Mariusz Polak',
        avatar: '#8B4513'
      },
      lastMessage: 'Spotkanie w sprawie petycji',
      timestamp: '12:15',
      unread: false
    }
  ];

  // Mock messages for selected conversation
  const messages = [
    {
      id: '1',
      sender: 'Maria Drozd',
      content: 'Dzień dobry, czy możemy porozmawiać o problemie z chodnikiem?',
      timestamp: '14:25',
      isMine: false
    },
    {
      id: '2',
      sender: 'Ja',
      content: 'Oczywiście, właśnie zbieram informacje na ten temat.',
      timestamp: '14:28',
      isMine: true
    },
    {
      id: '3',
      sender: 'Maria Drozd',
      content: 'Dziękuję za informację o chodniku',
      timestamp: '14:30',
      isMine: false
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // In a real application, this would send the message to an API
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-[300px_1fr] divide-x">
          {/* Conversations list */}
          <div className="max-h-[600px] overflow-y-auto">
            {conversations.map(conversation => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`w-full p-4 text-left hover:bg-gray-50 transition-colors border-b ${
                  selectedConversation?.id === conversation.id ? 'bg-purple-50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: conversation.user.avatar }}
                  >
                    {conversation.user.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{conversation.user.name}</span>
                      <span className="text-sm text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread && (
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Messages area */}
          <div className="flex flex-col h-[600px]">
            {selectedConversation ? (
              <>
                {/* Messages header */}
                <div className="p-4 border-b bg-white">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: selectedConversation.user.avatar }}
                    >
                      {selectedConversation.user.name[0]}
                    </div>
                    <span className="font-medium text-gray-900">
                      {selectedConversation.user.name}
                    </span>
                  </div>
                </div>

                {/* Messages list */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] rounded-lg p-3 ${
                        message.isMine 
                          ? 'bg-[#0B0B66] text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p>{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.isMine ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Napisz wiadomość..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#0B0B66] text-white rounded-lg font-semibold hover:bg-[#0B0B88] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      Wyślij
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Wybierz rozmowę, aby zobaczyć wiadomości
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages; 