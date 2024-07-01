import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Cart.css'; // Import custom CSS for Cart

function Cart({ cart }) {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cart</h1>
      <div className="cart-summary mb-4">
        <h5>Total Items: {totalItems}</h5>
        <h5>Total Price: ${totalPrice}</h5>
      </div>
      <ul className="list-group">
        {cart.map(item => (
          <li key={item.id} className="list-group-item">
            <div className="cart-item">
              <div className="cart-item-info">
                <h5>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <img src={item.image} alt={item.title} className="cart-item-image" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
