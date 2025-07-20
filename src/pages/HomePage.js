import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import ProductList from '../components/ProductList/ProductList';

const API = process.env.REACT_APP_API || "https://parsa-trade-server.onrender.com";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('همه');

  useEffect(() => {
      fetch(`${API}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => {
        console.error('خطا در دریافت محصولات:', err);
        setProducts([]);
      });
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
