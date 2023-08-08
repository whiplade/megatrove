import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart, handleIncrease, handleDecrease }) {
  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="cart">
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.product_full_image} alt={item.product_name} />
            <div>
              <h3>{item.product_name}</h3>
              <p>Price: Ksh.{item.unit_price}</p>
              <div className="add-cart">
                <div className="quantity-control">
                  <button className="decrease-button" onClick={() => handleDecrease(index)}>
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="increase-button" onClick={() => handleIncrease(index)}>
                    +
                  </button>
                  <button className="remove-button" onClick={() => handleRemoveFromCart(index)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

