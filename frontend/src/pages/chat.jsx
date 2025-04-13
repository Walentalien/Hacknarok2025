export default function Chat() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-[250px_1fr] gap-4 border border-gray-300 p-4">
        
        {/* Lista rozmów */}
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex items-center border border-blue-900 p-2 rounded cursor-pointer hover:bg-gray-200">
              {/* Avatar */}
              <img
                src="https://via.placeholder.com/50x50/ff0/000?text=%F0%9F%91%BC"
                alt="Avatar"
                className="w-12 h-12 mr-3"
              />
              {/* Dane */}
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
            {/* Tu będą wiadomości */}
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
