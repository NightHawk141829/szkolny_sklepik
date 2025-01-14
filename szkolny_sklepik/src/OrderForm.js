import React, { useState } from 'react';

const OrderForm = ({ products, cart, submitOrder }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      name,
      address,
      phone,
      product: selectedProduct,
      quantity,
    };
    submitOrder(orderDetails);
  };

  return (
    <div className="order-form">
      <h2>Formularz Zamówienia</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Imię i nazwisko:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Adres:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Numer telefonu:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Produkt:
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
          >
            <option>Wybierz produkt</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name} - {product.price} PLN
              </option>
            ))}
          </select>
        </label>
        <label>
          Ilość:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </label>
        <button type="submit">Złóż zamówienie</button>
      </form>
    </div>
  );
};

export default OrderForm;
