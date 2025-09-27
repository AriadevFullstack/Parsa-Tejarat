import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.Module.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button className="admin-btn" onClick={() => navigate('/admin')}>
        ورود به ادمین
      </button>
      <div className="logo">پرسا تجارت پدیدار</div>
    </header>
  );
}

export default Header;
