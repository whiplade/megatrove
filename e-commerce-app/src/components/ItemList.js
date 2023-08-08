
//THIS IS THE CODE IN USE NOW
import React, { useEffect, useState } from "react";
import Item from "./Item";

const BASE_URL = "http://ecommerce.muersolutions.com/api/v1";

const ItemList = ({ addToCart, searchTerm}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch item data from the API
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((items) => setItems(items))
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchTerm]);

  // Filter items based on the searchTerm
  const filteredItems = items.filter((item) =>
    item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to remove an item from the cart list
  const handleRemoveFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="item-list" >
      {filteredItems.map((item) => {
            return (
            <div >
          <React.Fragment key={item.id}>
            <Item item={item} addToCart={addToCart}/>
          </React.Fragment>
          </div>
    )})
                                
   }     
     
    </div>
  );
};

export default ItemList;
