import React from 'react';
import { useParams } from 'react-router-dom';
import ForumPost from '../components/ForumPost';
import CommentCard from '../components/CommentCard';

const Forum = () => {
  const { id } = useParams();

  // Mock data for individual post
  const mainPost = {
    id: '1',
    title: "Chodnik na ulicy Mikołaja Kopernika - łatanie dziur",
    content: "Czy wiadomo coś na temat planowanych prac naprawczych chodnika przy ulicy Mikołaja Kopernika? Chodnik jest w bardzo złym stanie – pełen dziur, pęknięć i nierówności, co stanowi realne zagrożenie, zwłaszcza dla osób starszych i dzieci. Korzystają z niego codziennie piesi, a w takim stanie trudno bezpiecznie się poruszać. Czy ktoś już to zgłaszał do urzędu lub wie, czy są planowane jakieś działania w tej sprawie?",
    author: "Marek Nowak",
    backgroundColor: "#FFD700",
    createdAt: new Date('2024-03-15').toISOString(),
    likes: 54,
    comments: 23
  };

  const comments = [
    {
      id: '1',
      author: "Maria Drozd",
      content: "Też zauważyłem ten problem, ciężko tamtędy przejść z wózkiem. Może petycja coś by dała?",
      score: "88/13",
      backgroundColor: "#E0E0E0",
      createdAt: new Date('2024-03-15T10:30:00').toISOString()
    },
    {
      id: '2',
      author: "Mariusz Polak",
      content: "Słyszałem, że mają coś robić w wakacje, ale nie wiem, czy chodziło o chodnik czy tylko drogę.",
      score: "54/23",
      backgroundColor: "#8B4513",
      createdAt: new Date('2024-03-15T11:15:00').toISOString()
    }
  ];

  return (
    <div className="w-full min-h-screen py-8">
      <div className="w-full mx-auto px-4">
        <ForumPost {...mainPost} />
        
        <div className="mt-8 space-y-4">
          {comments.map((comment) => (
            <CommentCard key={comment.id} {...comment} />
          ))}
        </div>

        <div className="bg-white p-4 mt-8 rounded-lg shadow">
          <textarea 
            placeholder="Dodaj komentarz..."
            className="w-full min-h-24 p-3 border rounded-lg mb-4 resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex justify-end">
            <button className="bg-[#0B0B66] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0B0B88] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500">
              Wyślij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;