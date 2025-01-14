import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './ProductList';
import OrderHistory from './OrderHistory';
import AdminDashboard from './AdminDashboard';
import Login from './Login';
import OrderForm from './OrderForm';
import './App.css';

const products = [
  { id: 1, name: 'Piórnik', description: 'Stylowy piórnik z wieloma kieszeniami na długopisy i ołówki.', price: 25, available: true },
  { id: 2, name: 'Notatnik w linię', description: 'Notatnik w linię idealny do robienia notatek.', price: 15, available: true },
  { id: 3, name: 'Notatnik w kratkę', description: 'Notatnik w kratkę świetny do szkicowania i pisania.', price: 15, available: true },
  { id: 4, name: 'Zestaw długopisów (kolorowych)', description: 'Zestaw kolorowych długopisów idealnych do zaznaczania i pisania.', price: 15, available: true },
  { id: 5, name: 'Zestaw ołówków', description: 'Komplet wysokiej jakości ołówków do szkicowania i pisania.', price: 15, available: true },
  { id: 6, name: 'Korektor w taśmie', description: 'Praktyczny korektor w taśmie do szybkich poprawek.', price: 15, available: true },
  { id: 7, name: 'Gumka do mazania', description: 'Gumka do mazania, która nie pozostawia smug.', price: 15, available: true },
  { id: 8, name: 'Zakreślacze (różne kolory)', description: 'Zestaw zakreślaczy w różnych kolorach do podkreślania ważnych informacji.', price: 15, available: true },
  { id: 9, name: 'Linijka', description: 'Solidna linijka o długości 30 cm.', price: 10, available: true },
  { id: 10, name: 'Zeszyt do matematyki', description: 'Specjalny zeszyt do matematyki z kratkowanymi kartkami.', price: 20, available: true },
  { id: 11, name: 'Plecak szkolny', description: 'Wytrzymały plecak szkolny z wieloma kieszeniami na książki i akcesoria.', price: 100, available: true },
  { id: 12, name: 'Pudełko śniadaniowe', description: 'Praktyczne pudełko śniadaniowe z przegródkami.', price: 30, available: true },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]); 
  const [currentPage, setCurrentPage] = useState('home'); 

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAdmin(false);
    setCurrentPage('products'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setCurrentPage('home'); 
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
    setCurrentPage('admin');
  };

  const addToCart = (product) => {
    setCart([cart, product]);
  };

  const submitOrder = (orderDetails) => {
    console.log('Zamówienie złożone:', orderDetails);
    setOrderHistory([orderHistory, orderDetails]); 
    setCart([]);
    setCurrentPage('orders'); 
  };

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        handleAdminLogin={handleAdminLogin}
        setCurrentPage={setCurrentPage}
      />
      <div className="container">
        {currentPage === 'home' && (
          <div className="home-page">
          <h1><em><u>Witamy w Szkolnym Sklepiku!</u></em></h1>
          <p>Jesteśmy tutaj, aby uczynić Twoje szkolne dni łatwiejszymi i przyjemniejszymi! Nasz szkolny sklepik oferuje szeroki asortyment produktów, które pomogą Ci w nauce, organizacji oraz codziennych obowiązkach. Od stylowych piórników i notatników, przez kolorowe zakreślacze, aż po praktyczne pudełka śniadaniowe i wytrzymałe plecaki – wszystko to znajdziesz w jednym miejscu.</p>
          <p>Sprawdź nasze najnowsze produkty, złóż zamówienie online i ciesz się wygodą zakupów bez wychodzenia z domu. W naszym sklepiku stawiamy na jakość, przystępne ceny i satysfakcję naszych klientów.</p>
          <p>Nie czekaj, dołącz do grona zadowolonych uczniów i odkryj, jak nasz szkolny sklepik może ułatwić Ci życie! 🎒🖊️📓</p>
        </div>
        )}
        {currentPage === 'products' && <ProductList addToCart={addToCart} />}
        {currentPage === 'orders' && <OrderHistory orderHistory={orderHistory} />}
        {currentPage === 'admin' && (isAdmin ? <AdminDashboard /> : <h2>Brak dostępu</h2>)}
        {currentPage === 'login' && <Login handleLogin={handleLogin} />}
        {currentPage === 'order' && <OrderForm products={products} submitOrder={submitOrder} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
