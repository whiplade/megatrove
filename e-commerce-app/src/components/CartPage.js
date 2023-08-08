import React, { useState } from 'react';
import Cart from './Cart';
import './CartPage.css';
import { Link } from 'react-router-dom'; 

function CartPage({ cartItems, removeFromCart, handleIncrease, handleDecrease }) {
  const [showCart, setShowCart] = useState(false);

  const calculateTotalCost = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.unit_price * item.quantity;
    });
    return total;
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div className="cart-icon" onClick={toggleCart}>
      </div>
      {showCart && <div className="cart-overlay" onClick={closeCart}></div>}
      <div className={`cart-dropdown ${showCart ? 'show' : ''}`} onClick={stopPropagation}>
        <button className="close-button" onClick={closeCart}>
          X
        </button>
        <h2>Cart Page</h2>
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      
        <div>
          <h3>Total Cost: Ksh.{calculateTotalCost()}</h3>
          {cartItems.length > 0 ? (
            <Link to="/checkout">
              <button className="checkout-button">Checkout</button>
            </Link>
          ) : (
            <button className="checkout-button disabled">Checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;

