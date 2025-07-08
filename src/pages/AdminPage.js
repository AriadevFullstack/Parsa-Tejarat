import React, { useState } from 'react';
import Header from '../components/Header/Header';
import AdminLogin from '../components/AdminLogin/AdminLogin';
import AdminPanel from '../components/AdminPanel/AdminPanel';

function AdminPage() {
  const [token, setToken] = useState(null); // ذخیره توکن ورود

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <div>
      <Header />
      {token ? (
        <AdminPanel token={token} />
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
}

export default AdminPage;
