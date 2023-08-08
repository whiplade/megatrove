import React, { useState } from 'react';
import './CheckoutPage.css';

const CheckoutForm = ({ cartItems, totalCost, handleCheckout, user}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleCheckout();

    setPurchasedItems(cartItems);

    setIsSubmitted(true);
  };

  const calculateTotalCost = () => {
    let total = 0;
    purchasedItems.forEach((item) => {
      total += item.unit_price * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <h2>Checkout</h2>
      {isSubmitted ? (
        <div>
        <h2>Payment was successful! Thank you  {user} for your purchase.</h2>
        <div className="receipt">
          <h3>Receipt:</h3>
          <ul>
            {purchasedItems.map((item, index) => (
              <li key={index}>
                <span>{item.product_name}</span>
                  <span>Price: Ksh.{item.unit_price}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span>Total: Ksh.{item.unit_price * item.quantity}</span>
                </li>
            ))}
          </ul>
          <h3>Total Cost: Ksh.{calculateTotalCost()}</h3>
        </div>
      </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Card Number:
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </label>
          <label>
            Card Holder:
            <input type="text" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
          </label>
          <label>
            Expiry Date:
            <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
          </label>
          <label>
            CVV:
            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
          </label>
          <button type="submit">Submit Payment</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;