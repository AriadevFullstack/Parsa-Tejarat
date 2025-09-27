import React from 'react';
import AdminProductCard from './AdminProductCard';

function AdminProductList({ products, onDelete, onEdit }) {
  return (
    <div className="admin-product-list">
      {products.map((product) => (
        <AdminProductCard
          key={product._id}
          product={product}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default AdminProductList;
