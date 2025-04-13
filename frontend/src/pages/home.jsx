import React from 'react';
import CategoryNav from '../components/CategoryNav';
import ForumPostPreview from '../components/ForumPostPreview';

const Home = () => {
  const posts = [
    {
      id: '1',
      title: "Chodnik na ulicy Mikołaja Kopernika - łatanie dziur",
      content: "Czy wiadomo coś na temat planowanych prac naprawczych chodnika przy ulicy Mikołaja Kopernika? Chodnik jest w bardzo złym stanie – pełen dziur, pęknięć i nierówności, co stanowi realne zagrożenie, zwłaszcza dla osób starszych i dzieci...",
      score: "54/23",
      featuredComment: {
        author: "Marek Nowak",
        content: "Zgłaszałem to do urzędu kilka miesięcy temu, ale jak na razie cisza. Może warto ponowić zgłoszenie grupowo?",
        score: "32/1",
        avatarColor: "#FFD700"
      }
    },
    {
      id: '2',
      title: "Sadzenie drzew przy chodniku w ciągu ulicy Pięknej",
      content: "Propozycja zazieleniania naszej okolicy poprzez nasadzenia drzew wzdłuż chodnika...",
      score: "32/5"
    }
  ];

  return (
    <div className="min-h-screen">
        <CategoryNav />
        <div className="grid grid-cols-[200px_1fr] gap-4 mt-4">
          <div className="bg-white p-2">
            jak bede miał siły dorobię
          </div>
          <div >
            {posts.map((post, index) => (
              <ForumPostPreview key={post.id} {...post} />
            ))}
          </div>
        
        </div>
    </div>
  );
};

export default Home;