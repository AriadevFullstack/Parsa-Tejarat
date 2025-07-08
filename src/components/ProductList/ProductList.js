import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>محصولی برای نمایش وجود ندارد.</p>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductList;
