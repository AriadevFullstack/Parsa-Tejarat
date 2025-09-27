import React, { useEffect, useState } from 'react';

const API = process.env.REACT_APP_API;

function AddProductForm({ onAdd, onUpdate, editingProduct }) {
  const [form, setForm] = useState({
    _id: '',
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (editingProduct) {
      setForm({ ...editingProduct }); // شامل _id
    } else {
      setForm({ _id: '', name: '', description: '', price: '', category: '', image: '' });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = form.image;

    if (file) {
      const data = new FormData();
      data.append('image', file);

      const res = await fetch(`${API}/upload`, { method: 'POST', body: data });
      const imgRes = await res.json();
      imageUrl = imgRes.imageUrl;
    }

    const productData = {
      ...form,
      price: Number(form.price),
      image: imageUrl,
    };

    if (editingProduct) {
      productData._id = editingProduct._id; // حتما _id داشته باشد
      await onUpdate(productData);
    } else {
      await onAdd(productData);
    }

    setForm({ _id: '', name: '', description: '', price: '', category: '', image: '' });
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>{editingProduct ? 'ویرایش محصول' : 'افزودن محصول جدید'}</h3>
      <input name="name" type="text" placeholder="نام" value={form.name} onChange={handleChange} required />
      <input name="description" type="text" placeholder="توضیحات" value={form.description} onChange={handleChange} required />
      <input name="price" type="number" placeholder="قیمت" value={form.price} onChange={handleChange} required />
      <input name="category" type="text" placeholder="دسته‌بندی" value={form.category} onChange={handleChange} required />
      <input type="file" onChange={handleFileChange} />
      <button type="submit">{editingProduct ? 'ذخیره تغییرات' : 'افزودن'}</button>
    </form>
  );
}

export default AddProductForm;
