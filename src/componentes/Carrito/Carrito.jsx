import React from 'react';
import { useCart } from '../CartContext/CartContext';

function ShoppingCart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map(item => (
        <div key={producto.id}>
          <img src={producto.image} alt={producto.title} />
          <p>{producto.title}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: {producto.price}</p>
          <button onClick={() => removeFromCart(producto.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
