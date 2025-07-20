import React, { useEffect, useState } from 'react';
import AdminProductList from './AdminProductList';
import AddProductForm from './AddProductForm';
import './AdminPanel.css';
const API = process.env.REACT_APP_API || "https://parsa-trade-server.onrender.com";



function AdminPanel({ token }) {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('خطا در دریافت محصولات:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${API}/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProducts();
  };

 const handleAdd = async (productData) => {
    await fetch(`${API}/products`, {
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
    await fetch(`${API}/products/${productData.id}`, {
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
