
import React, { useState } from 'react';

const Item = ({ item, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };
  
  function handleSignUp(){
    window.location.assign("/signup")
  }

  return (
    <div className="item">
      {item.product_full_image && <img src={item.product_full_image} alt={item.product_name} />}
      <h3>{item.product_name}</h3>
      <p>Price: Ksh.{item.unit_price}</p>

      <div className="show-details">
        {showDetails ? (
          <>
            <p>{item.product_description}</p>
            <button onClick={handleToggleDetails}>Show Less</button>
          </>
        ) : (
          <button onClick={handleToggleDetails}>Show More</button>
        )}
      </div>

      <div className="add-to-cart">
        
        <button onClick={() => { addToCart(item)}}>Add to Cart</button>
        
      </div>
    </div>
  );
};

export default Item;








