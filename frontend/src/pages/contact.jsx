import React from 'react';

const Contact = () => {
  const teamMembers = [
    {
      name: 'Jan Kowalski',
      role: 'Project Lead',
      avatar: '#4A90E2',
      email: 'jan.kowalski@example.com'
    },
    {
      name: 'Anna Nowak',
      role: 'Lead Developer',
      avatar: '#50E3C2',
      email: 'anna.nowak@example.com'
    },
    {
      name: 'Piotr Wiśniewski',
      role: 'UX Designer',
      avatar: '#F5A623',
      email: 'piotr.wisniewski@example.com'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nasz Zespół</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Jesteśmy zespołem pasjonatów, którzy tworzą innowacyjne rozwiązania dla społeczności lokalnej.
        </p>
      </div>

      {/* Team section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {teamMembers.map(member => (
          <div key={member.name} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div 
              className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-semibold"
              style={{ backgroundColor: member.avatar }}
            >
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <a 
              href={`mailto:${member.email}`}
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              {member.email}
            </a>
          </div>
        ))}
      </div>

      {/* Contact form */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skontaktuj się z nami</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Wiadomość
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#0B0B66] text-white rounded-lg font-semibold hover:bg-[#0B0B88] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>

      {/* Contact info */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Inne sposoby kontaktu</h2>
        <div className="space-y-2 text-gray-600">
          <p>Email: kontakt@example.pl</p>
          <p>Tel: +48 123 456 789</p>
          <p>Adres: ul. Krakowska 123, 30-001 Kraków</p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 