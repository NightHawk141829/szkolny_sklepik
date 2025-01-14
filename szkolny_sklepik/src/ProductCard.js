import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Cena: {product.price} PLN</p>
    </div>
  );
};

export default ProductCard;
