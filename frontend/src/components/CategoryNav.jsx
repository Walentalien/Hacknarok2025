import React from 'react';
import './CategoryNav.css';

const CategoryNav = () => {
  const categories = [
    'W mojej okolicy',
    'Polityka',
    'Infrastruktura',
    'Kultura',
    'Sport'
  ];

  return (
    <nav className="category-nav">
      {categories.map((category, index) => (
        <button key={index} className="category-button">
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav; 