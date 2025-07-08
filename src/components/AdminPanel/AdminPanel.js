import React, { useEffect, useState } from 'react';
import AdminProductList from './AdminProductList';
import AddProductForm from './AddProductForm';
import './AdminPanel.css';
const API = process.env.REACT_APP_API;


function AdminPanel({ token }) {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // ← برای ویرایش

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProducts();
  };

  const handleAdd = async (productData) => {
    await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    });
    fetchProducts();
  };

  const handleUpdate = async (productData) => {
    await fetch(`http://localhost:5000/products/${productData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    });
    setEditingProduct(null);
    fetchProducts();
  };

  return (
    <div className="admin-panel">
      <h2>پنل مدیریت محصولات</h2>

      <AddProductForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingProduct={editingProduct}
      />

      <AdminProductList
        products={products}
        onDelete={handleDelete}
        onEdit={setEditingProduct}
      />
    </div>
  );
}

export default AdminPanel;
