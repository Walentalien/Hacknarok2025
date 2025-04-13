const messages = [
  {
    "author": "Anna Kowalska",
    "time": "17:45",
    "message": "Dzień dobry Panie Wójcie, chciałabym zapytać o planowane remonty dróg w naszej miejscowości Pępin. Wiele z nich jest w opłakanym stanie."
  },
  {
    "author": "Janusz Malinowski (Wójt Pępina)",
    "time": "17:47",
    "message": "Dzień dobry Pani Anno! Zdajemy sobie sprawę z problemu. Aktualnie przygotowujemy projekt budżetu na przyszły rok, w którym uwzględniamy remont kilku odcinków dróg w Pępinie."
  },
  {
    "author": "Anna Kowalska",
    "time": "17:49",
    "message": "Bardzo się cieszę! Czy wiadomo już, które ulice w Pępinie będą remontowane w pierwszej kolejności?"
  },
  {
    "author": "Janusz Malinowski (Wójt Pępina)",
    "time": "17:50",
    "message": "Priorytetem będą ulice Kopernika, Mickiewicza oraz część Słonecznej. Ich stan techniczny jest obecnie najgorszy."
  },
  {
    "author": "Anna Kowalska",
    "time": "17:52",
    "message": "Rozumiem. Czy mieszkańcy Pępina będą mogli zgłaszać swoje sugestie dotyczące kolejnych inwestycji?"
  },
  {
    "author": "Janusz Malinowski (Wójt Pępina)",
    "time": "17:54",
    "message": "Tak, planujemy zorganizować konsultacje społeczne w przyszłym miesiącu. Szczegóły podamy wkrótce na stronie internetowej Pępina."
  },
  {
    "author": "Anna Kowalska",
    "time": "17:55",
    "message": "Super, dziękuję za odpowiedź i zaangażowanie!"
  },
  {
    "author": "Janusz Malinowski (Wójt Pępina)",
    "time": "17:56",
    "message": "Również dziękuję za troskę o naszą gminę. Miłego wieczoru!"
  }
]


export default function Chat() {
  const listItems = messages.map((messages) =><div className="bg-blue-100 p-2 m-1">
    <h3 className="font-bold">{messages.author}</h3>
    <p>{messages.message}</p>
    <p className="text-xs">{messages.time}</p>
  </div> );
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-[250px_1fr] gap-4 border border-gray-300 p-4">
        
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex items-center border border-blue-900 p-2 rounded cursor-pointer hover:bg-gray-200">
              
              
              <img
                src="https://via.placeholder.com/50x50/ff0/000?text=%F0%9F%91%BC"
                alt="Avatar"
                className="w-12 h-12 mr-3"
              />

              <div className="flex flex-col">
                <p className="text-sm font-bold text-blue-800">Marek Nowak</p>
                <p className="text-xs text-gray-600 truncate w-40">Ty: dzień dobry, sprawa wynika....</p>
              </div>
            </div>
          ))}
        </div>

        {/* Okno wiadomości */}
        <div className="flex flex-col h-[500px]">
          {/* Okno czatu */}
          <div className="flex-1 border border-blue-900 bg-white rounded mb-2 p-4 overflow-y-auto">
              {listItems}
          </div>

          {/* Input na wiadomość */}
          <div className="flex">
            <input
              type="text"
              placeholder="Dodaj"
              className="flex-1 border border-purple-700 p-2 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-blue-900 text-white px-4 py-2 rounded-r hover:bg-blue-800">
              wyślij
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
