import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.Module.css';

function ProductList({ products }) {
  return (
    <div className="products-page">
      <h2>محصولات ما</h2>
      {products.length === 0 ? (
        <p>محصولی برای نمایش وجود ندارد.</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
