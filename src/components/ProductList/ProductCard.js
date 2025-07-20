import React from 'react';
import './ProductList.css'; // چون کلاس‌ها تو همین فایل CSS هستن
const API = process.env.REACT_APP_API || "https://parsa-trade-server.onrender.com";

function ProductCard({ product }) {
  return (
    <div className="product-card">
        {product.image && (
  <img src={`${API}${product.image}`} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: 10 }} />
)}

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>قیمت: {product.price} تومان</p>
    </div>
  );
}

export default ProductCard;
