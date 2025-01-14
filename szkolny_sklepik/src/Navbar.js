import React from 'react';

const Navbar = ({ isLoggedIn, isAdmin, handleLogout, handleLogin, handleAdminLogin, setCurrentPage }) => {
  return (
    <div className="navbar">
      <a href="#home" onClick={() => setCurrentPage('home')}>Szkolny Sklepik</a>
      <a href="#products" onClick={() => setCurrentPage('products')}>Produkty</a>
      <a href="#orders" onClick={() => setCurrentPage('orders')}>Moje Zamówienia</a>
      {isLoggedIn && <a href="#order" onClick={() => setCurrentPage('order')}>Złóż Zamówienie</a>}
      <div style={{ float: 'right' }}>
        {isLoggedIn ? (
          <div>
            <a href="#admin" onClick={handleAdminLogin}>Admin Panel</a>
            <a href="#logout" onClick={handleLogout}>Wyloguj</a>
          </div>
        ) : (
          <a href="#login" onClick={() => setCurrentPage('login')}>Zaloguj</a>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;