export default function User() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-[120px_1fr] gap-6 border border-gray-300 p-4">
        {/* Lewa kolumna */}
        <div className="flex flex-col items-center gap-6">
          {/* Avatar i imię */}
          <div className="flex flex-col items-center">
            <img
              src="https://placehold.co/600x600"
              alt="Avatar"
              className="w-24 h-24 rounded-full border"
            />
            <p className="mt-2 font-semibold">Jan Kowalski</p>
          </div>

          {/* Informacje */}
          <div className="text-sm border border-gray-300 p-2 w-full text-center">
            <p><span className="font-bold">id:</span> 2137420</p>
            <p><span className="font-bold">data dołączenia:</span><br /> 20-04-2022</p>
            <p><span className="font-bold">ilość postów:</span> 200</p>
            <p><span className="font-bold">ilość komentarzy:</span> 300</p>
            <p><span className="font-bold">liczba +/-:</span> 315/67</p>
          </div>
        </div>

        {/* Prawa kolumna */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold border-b-2 border-purple-700 pb-2 mb-4">
            Ostatnia aktywność:
          </h2>

          {/* Lista aktywności */}
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start border border-gray-400 p-3 rounded">
                {/* Avatar */}
                <img
                  src="https://placehold.co/600x600"
                  alt="User avatar"
                  className="w-14 h-14 mr-4"
                />
                {/* Treść */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-bold text-blue-800">Marek Nowak</p>
                    <p className="text-xs text-gray-600">02-03-2025 r. 14:54 GM +1</p>
                  </div>
                  <p className="text-sm mb-2">
                    Zgłaszałem to do urzędu kilka miesięcy temu, ale jak na razie cisza. Może warto ponowić zgłoszenie grupowo?
                  </p>
                  <p className="text-xs text-gray-500">Użytkownik dał + pod postem</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
