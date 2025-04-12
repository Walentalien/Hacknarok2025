import React from 'react';
import ForumPost from '../components/ForumPost';
import CommentCard from '../components/CommentCard';

const Forum = () => {
  const mainPost = {
    title: "Chodnik na ulicy Mikołaja Kopernika - łatanie dziur",
    content: "Czy wiadomo coś na temat planowanych prac naprawczych chodnika przy ulicy Mikołaja Kopernika? Chodnik jest w bardzo złym stanie – pełen dziur, pęknięć i nierówności, co stanowi realne zagrożenie, zwłaszcza dla osób starszych i dzieci. Korzystają z niego codziennie piesi, a w takim stanie trudno bezpiecznie się poruszać. Czy ktoś już to zgłaszał do urzędu lub wie, czy są planowane jakieś działania w tej sprawie?",
    author: "Marek Nowak",
    backgroundColor: "#FFD700"
  };

  const comments = [
    {
      author: "Maria Drozd",
      content: "Też zauważyłem ten problem, ciężko tamtędy przejść z wózkiem. Może petycja coś by dała?",
      score: "88/13",
      backgroundColor: "#E0E0E0"
    },
    {
      author: "Mariusz Polak",
      content: "Słyszałem, że mają coś robić w wakacje, ale nie wiem, czy chodziło o chodnik czy tylko drogę.",
      score: "54/23",
      backgroundColor: "#8B4513"
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen py-8">
      <div className="w-full mx-auto px-4">
        <ForumPost {...mainPost} />
        
        <div className="my-8">
          {comments.map((comment, index) => (
            <CommentCard key={index} {...comment} />
          ))}
        </div>

        <div className="bg-white p-4 rounded-md shadow-sm">
          <textarea 
            placeholder="Dodaj komentarz..."
            className="w-full min-h-24 p-3 border border-sky-50 rounded-sm mb-4 resize-y"
          />
          <button className="bg-[#0B0B66] text-white border-none py-3 px-6 rounded-sm cursor-pointer font-semibold hover:outline-2 hover:outline-blue-300">wyślij</button>
        </div>
      </div>
    </div>
  );
};

export default Forum;