import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.Module.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">پرسا تجارت</div>
      <button className="admin-btn" onClick={() => navigate('/admin')}>
        ورود به ادمین
      </button>
    </header>
  );
}

export default Header;
