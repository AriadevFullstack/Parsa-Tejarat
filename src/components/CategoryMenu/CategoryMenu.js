import React from 'react';
import './CategoryMenu.Module.css';

function CategoryMenu({ categories, selected, onSelect }) {
  return (
    <div className="category-menu">
      {categories.map((cat, index) => (
        <button
          key={index}
          className={selected === cat ? 'active' : ''}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
