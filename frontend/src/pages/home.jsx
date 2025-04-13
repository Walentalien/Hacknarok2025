import React from 'react';
import CategoryNav from '../components/CategoryNav';
import ForumPostPreview from '../components/ForumPostPreview';

import { useEffect,useState } from 'react';

import PopupForm from '../components/PopUpForm';

const Home = () => {
  const posts = [
    {
      title: "Wymiana oświetlenia ulicznego na ul. Słonecznej",
      content: "Latarnie przy ulicy Słonecznej przestały działać. Czy miasto planuje ich naprawę lub wymianę? Po zmroku jest tam naprawdę niebezpiecznie.",
      score: "45/12",
      id:0,
      featuredComment: {
        author: "Anna Kowalska",
        content: "Już kilka razy to zgłaszaliśmy. Ostatnio obiecali naprawę w przyszłym miesiącu.",
        score: "27/3",
        avatarColor: "#FFA07A"
      }
    },
    {
      title: "Brak koszy na śmieci w parku miejskim",
      content: "Spacerując po parku zauważyłem brak wystarczającej liczby koszy na śmieci. W rezultacie wiele osób zostawia śmieci na ziemi.",
      score: "30/8",
      id:1,
      featuredComment: {
        author: "Piotr Zieliński",
        content: "Zgadzam się! Może warto napisać petycję do urzędu miasta?",
        score: "15/2",
        avatarColor: "#90EE90"
      }
    },
    {
      title: "Nowe ławki na placu zabaw przy ul. Leśnej",
      content: "Czy są plany ustawienia nowych ławek na placu zabaw? Obecne są zniszczone i niewygodne.",
      score: "38/19",
      id:2,
      featuredComment: {
        author: "Ewa Nowak",
        content: "Ostatnio radny mówił, że temat będzie poruszony na sesji rady miasta.",
        score: "21/4",
        avatarColor: "#ADD8E6"
      }
    },
    {
      title: "Zanieczyszczony staw w parku",
      content: "Staw w parku miejskim jest bardzo zanieczyszczony. Czy planowane jest jego oczyszczenie?",
      score: "60/15",
      id:3,
      featuredComment: {
        author: "Kamil Wójcik",
        content: "Rozmawiałem z zarządcą parku, podobno wiosną ma być czyszczony.",
        score: "33/2",
        avatarColor: "#F08080"
      }
    },
    {
      title: "Problem z parkowaniem na ul. Kwiatowej",
      content: "Brakuje miejsc parkingowych na ulicy Kwiatowej. Czy jest szansa na nowe parkingi?",
      score: "28/7",
      id:4,
      featuredComment: {
        author: "Monika Lewandowska",
        content: "Widziałam plany zagospodarowania — przewidują nowe miejsca!",
        score: "19/3",
        avatarColor: "#20B2AA"
      }
    },
    {
      title: "Hałas nocny z budowy przy ul. Długiej",
      content: "Czy ktoś jeszcze ma problem z hałasem z budowy przy Długiej? Prace trwają do późna w nocy.",
      score: "52/11",
      id:5,
      featuredComment: {
        author: "Tomasz Wiśniewski",
        content: "Powinniśmy zgłosić to do nadzoru budowlanego.",
        score: "24/2",
        avatarColor: "#FFB6C1"
      }
    },
    {
      title: "Brak przejścia dla pieszych przy szkole podstawowej",
      content: "Nie ma bezpiecznego przejścia dla dzieci przed szkołą podstawową nr 3. Kiedy zostanie wyznaczone?",
      score: "48/13",
      id:6,
      featuredComment: {
        author: "Katarzyna Maj",
        content: "Dobrze byłoby zorganizować zbiorową petycję rodziców.",
        score: "26/1",
        avatarColor: "#FFA500"
      }
    },
    {
      title: "Zepsuty przystanek autobusowy na ul. Polnej",
      content: "Wiaty przystankowe są zniszczone. Czy ktoś wie, czy będą remontowane?",
      score: "33/5",
      id:7,
      featuredComment: {
        author: "Jan Baran",
        content: "Miasto ogłosiło przetarg na nowe przystanki.",
        score: "18/2",
        avatarColor: "#32CD32"
      }
    },
    {
      title: "Niebezpieczna dziura na ul. Zielonej",
      content: "Ogromna dziura na Zielonej jest nieoznakowana. Może dojść do wypadku!",
      score: "70/9",
      id:8,
      featuredComment: {
        author: "Dorota Pawlak",
        content: "Już zgłoszone do Zarządu Dróg.",
        score: "39/4",
        avatarColor: "#BA55D3"
      }
    },
    {
      title: "Nowe drzewa na osiedlu Słonecznym",
      content: "Czy wiadomo, kiedy nasadzą nowe drzewa? Obiecywano to przed rokiem.",
      score: "27/6",
      id:9,
      featuredComment: {
        author: "Marek Tomaszewski",
        content: "Podobno sadzenie zaplanowane na jesień.",
        score: "12/1",
        avatarColor: "#00CED1"
      }
    },
    {
      title: "Problemy z oświetleniem parku",
      content: "Lampy w parku nie działają od tygodnia. Spacer po zmroku jest niebezpieczny.",
      score: "34/5",
      id:10,
      featuredComment: {
        author: "Natalia Sikora",
        content: "Słyszałam, że naprawa ma być zakończona do piątku.",
        score: "20/2",
        avatarColor: "#FF69B4"
      }
    },
    {
      title: "Opóźnienia w odbiorze śmieci na ul. Spacerowej",
      content: "Śmieci nie są odbierane regularnie. Czy ktoś zna powód?",
      score: "41/7",
      id:11,
      featuredComment: {
        author: "Robert Lis",
        content: "Zmienił się wykonawca usługi — początkowe problemy.",
        score: "22/3",
        avatarColor: "#6495ED"
      }
    },
    {
      title: "Brak sygnalizacji świetlnej na skrzyżowaniu Kościuszki-Mickiewicza",
      content: "Bardzo niebezpieczne miejsce, przydałaby się sygnalizacja świetlna.",
      score: "56/12",
      id:12,
      featuredComment: {
        author: "Iwona Górska",
        content: "Projekt sygnalizacji jest już zatwierdzony.",
        score: "31/5",
        avatarColor: "#9370DB"
      }
    },
    {
      title: "Uszkodzona fontanna na rynku",
      content: "Fontanna nie działa od kilku miesięcy. Czy wiadomo coś o naprawie?",
      score: "29/9",
      id:13,
      featuredComment: {
        author: "Andrzej Nowicki",
        content: "Będzie remontowana razem z całym rynkiem.",
        score: "14/1",
        avatarColor: "#3CB371"
      }
    },
    {
      title: "Problem z dzikimi wysypiskami",
      content: "Coraz więcej nielegalnych wysypisk śmieci. Czy miasto coś z tym robi?",
      score: "63/20",
      id:14,
      featuredComment: {
        author: "Beata Krawczyk",
        content: "Urząd zapowiedział większe kontrole straży miejskiej.",
        score: "37/6",
        avatarColor: "#CD5C5C"
      }
    },
    {
      title: "Brak miejsc w żłobkach miejskich",
      content: "Trudno dostać miejsce w żłobku. Czy planowane są nowe placówki?",
      score: "44/10",
      id:15,
      featuredComment: {
        author: "Łukasz Walczak",
        content: "Budowa nowego żłobka rusza latem!",
        score: "23/3",
        avatarColor: "#40E0D0"
      }
    },
    {
      title: "Zalane piwnice po ulewach",
      content: "W wielu blokach po ostatnich ulewach zalane zostały piwnice. Czy ktoś zgłaszał to do miasta?",
      score: "50/14",
      id:16,
      featuredComment: {
        author: "Martyna Król",
        content: "Zgłoszone, podobno miasto analizuje sytuację.",
        score: "28/4",
        avatarColor: "#FF7F50"
      }
    },
    {
      title: "Nowy skatepark - kiedy otwarcie?",
      content: "Kiedy planowane jest otwarcie nowego skateparku przy stadionie?",
      score: "36/5",
      id:17,
      featuredComment: {
        author: "Adrian Szymański",
        content: "Podobno w czerwcu, ale jeszcze bez konkretnej daty.",
        score: "17/1",
        avatarColor: "#1E90FF"
      }
    },
    {
      title: "Modernizacja siłowni plenerowych",
      content: "Czy wiadomo coś o modernizacji siłowni na świeżym powietrzu?",
      score: "31/8",
      id:18,
      featuredComment: {
        author: "Justyna Mazur",
        content: "Część urządzeń już wymieniono, reszta do wakacji.",
        score: "19/2",
        avatarColor: "#FF1493"
      }
    },
    {
      title: "Nowe ścieżki rowerowe",
      content: "Kiedy powstaną nowe ścieżki rowerowe w centrum?",
      score: "58/18",
      id:19,
      featuredComment: {
        author: "Grzegorz Duda",
        content: "Projekt już zatwierdzony, budowa rusza na wiosnę!",
        score: "34/4",
        avatarColor: "#FF8C00"
      }
    }
  ];

  const [curPosts, setCurPosts] = useState(posts.slice(0, posts.length));
  const [category, setCategory] = useState("all");



  const f=(cat)=>{setCategory(cat)}
  
  useEffect(() => {
    console.log(category);
    switch(category) {
      case "all":
          setCurPosts(posts.slice(0, posts.length));
        break;
      case "W mojej okolicy":
        setCurPosts(posts.slice(1, 5));
        break;
      case "Polityka":
        setCurPosts(posts.slice(5, 10));
        break;
      case "Infrastruktura":
        setCurPosts(posts.slice(10, 15));
        break;
      case "Kultura":
        setCurPosts(posts.slice(3, 8)); 

        break;
      case "Sport":

        setCurPosts(posts.slice(8, 13));

        break;
     

      default:
        curPosts = posts.slice(0, posts.length);
        break;

    }

  },[category]);

  const handleForumCreate = () =>{

  }


  return (
    <div className="min-h-screen">
        <CategoryNav f={f}  />
        <div className="grid grid-cols-[200px_1fr] gap-4 mt-4">
          <div className="bg-white p-2">
            <PopupForm />
          </div>
          <div >
            {curPosts.map((post, index) => (
              <ForumPostPreview key={index} {...post}  />
            ))}
          </div>
        
        </div>
    </div>
  );
};

export default Home;