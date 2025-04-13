import React from 'react';
const CategoryNav = () => {
  const categories = [
    'W mojej okolicy',
    'Polityka',
    'Infrastruktura',
    'Kultura',
    'Sport'
  ];

  return (
    <nav className="flex gap-4 py-4 overflow-x-auto">
      {categories.map((category, index) => (
        <button key={index} className="p-10 px-6 bg-[#f8f9fa] border border-solid border-[e0e0e0] rounded-sm text-[#0B0B66] font-medium whitespace-nowrap cursor-pointer duration-200 ease-in transition-all hover:bg-[#0B0B66] hover:text-white hover:border hover:border-[#0B0B66]">
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav; 