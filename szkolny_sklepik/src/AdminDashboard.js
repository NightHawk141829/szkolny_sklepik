import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Panel Administratora</h1>
      <div className="admin-dashboard-content">
        <div className="admin-dashboard-section">
          <h2>Zarządzanie Produktami</h2>
          <button>Dodaj Produkt</button>
          <button>Edytuj Produkt</button>
          <button>Usuń Produkt</button>
        </div>
        <div className="admin-dashboard-section">
          <h2>Zarządzanie Zamówieniami</h2>
          <button>Przeglądaj Zamówienia</button>
          <button>Edytuj Zamówienie</button>
          <button>Usuń Zamówienie</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;