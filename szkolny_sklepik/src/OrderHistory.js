import React from 'react';

const OrderHistory = ({ orderHistory }) => {
  return (
    <div>
      <h2>Historia Zamówień</h2>
      {orderHistory.length === 0 ? (
        <p>Brak zamówień w historii.</p>
      ) : (
        <ul>
          {orderHistory.map((order, index) => (
            <li key={index}>
              <p>Imię i nazwisko: {order.name}</p>
              <p>Adres: {order.address}</p>
              <p>Numer telefonu: {order.phone}</p>
              <p>Produkt: {order.product}</p>
              <p>Ilość: {order.quantity}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
