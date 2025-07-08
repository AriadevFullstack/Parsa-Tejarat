import React from 'react';

function AdminProductCard({ product, onDelete, onEdit }) {
  return (
    <div className="admin-product-card">
        {product.image && (
  <img src={`http://localhost:5000${product.image}`} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: 10 }} />
)}

      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>قیمت: {product.price} تومان</p>
      <p>دسته: {product.category}</p>
      <button onClick={() => onDelete(product.id)}>حذف</button>
      <button onClick={() => onEdit(product)}>ویرایش</button>
    </div>
  );
}

export default AdminProductCard;
