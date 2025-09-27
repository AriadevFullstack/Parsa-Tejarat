import React from 'react';

const API = process.env.REACT_APP_API;

function AdminProductCard({ product, onDelete, onEdit }) {
  return (
    <div className="admin-product-card">
      {product.image && (
        <img
          src={`${API}${product.image}`}
          alt={product.name}
          style={{ width: '100%', height: 'auto', marginBottom: 10 }}
        />
      )}

      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>قیمت: {product.price} تومان</p>
      <p>دسته: {product.category}</p>

      <div className="card-actions">
        <button onClick={() => onEdit(product)}>ویرایش</button>
        <button
          onClick={() => {
            if (window.confirm("آیا مطمئن هستید می‌خواهید این محصول را حذف کنید؟")) {
              onDelete(product._id); 
            }
          }}
        >
          حذف
        </button>
      </div>
    </div>
  );
}

export default AdminProductCard;
