import React from 'react';
const CategoryNav = ({f}) => {
  const categories = [
    'W mojej okolicy',
    'Polityka',
    'Infrastruktura',
    'Kultura',
    'Sport'
  ];

  console.log(f)
  // is clicked on to buttons
  return (
    <nav className="flex gap-4 p-4 overflow-x-auto bg-white">
      {categories.map((category, index) => (
        <button onClick={() => f(category)} key={index} className="p-3 px-6 bg-gray-200 border border-gray-600 text-gray-800 font-medium whitespace-nowrap cursor-pointer duration-200 ease-in transition-all hover:bg-[#0B0B66] hover:text-white hover:border hover:border-[#0B0B66]">
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav; 