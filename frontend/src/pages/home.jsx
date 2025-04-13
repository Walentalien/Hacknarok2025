import React from 'react';
import CategoryNav from '../components/CategoryNav';
import ForumPostPreview from '../components/ForumPostPreview';

const Home = () => {
  const posts = [
    {
      title: "Chodnik na ulicy Mikołaja Kopernika - łatanie dziur",
      content: "Czy wiadomo coś na temat planowanych prac naprawczych chodnika przy ulicy Mikołaja Kopernika? Chodnik jest w bardzo złym stanie – pełen dziur, pęknięć i nierówności, co stanowi realne zagrożenie, zwłaszcza dla osób starszych i dzieci...",
      score: "54/23",
      featuredComment: {
        author: "Marek Nowak",
        content: "Zgłaszałem to do urzędu kilka miesięcy temu, ale jak na razie cisza. Może warto ponowić zgłoszenie grupowo?",
        avatarColor: "#FFD700"
      }
    },
    {
      title: "Sadzenie drzew przy chodniku w ciągu ulicy Pięknej",
      content: "Propozycja zazieleniania naszej okolicy poprzez nasadzenia drzew wzdłuż chodnika...",
      score: "32/5"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <main className="mx-auto p-4">
        <CategoryNav />
        <div className="mt-4">
          {posts.map((post, index) => (
            <ForumPostPreview key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;