import React, { useEffect, useState } from 'react';
import AdminProductList from './AdminProductList';
import AddProductForm from './AddProductForm';
import './AdminPanel.Module.css';

const API = process.env.REACT_APP_API;

function AdminPanel({ token }) {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await fetch(`${API}/products/${_id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  const handleAdd = async (productData) => {
    try {
      await fetch(`${API}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });
      await fetchProducts();
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  const handleUpdate = async (productData) => {
    try {
      await fetch(`${API}/products/${productData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });
      setEditingProduct(null);
      await fetchProducts();
    } catch (err) {
      console.error('Error updating product:', err);
    }
  };

  return (
    <div className="admin-panel">
      <h2>پنل مدیریت محصولات</h2>
      <AddProductForm onAdd={handleAdd} onUpdate={handleUpdate} editingProduct={editingProduct} />
      <AdminProductList products={products} onDelete={handleDelete} onEdit={setEditingProduct} />
    </div>
  );
}

export default AdminPanel;
