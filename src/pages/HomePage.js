import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import ProductList from '../components/ProductList/ProductList';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('همه');

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const categories = ['همه', ...new Set(products.map(p => p.category))];

  const filteredProducts =
    selectedCategory === 'همه'
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      <Header />
      <CategoryMenu
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default HomePage;
