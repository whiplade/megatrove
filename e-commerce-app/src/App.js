import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage"; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const[isLoggedIn, setIsLoggedIn]= useState(false)
  const [user, setUser] = useState([])
  
  useEffect(() => {
    if(isLoggedIn){
        
     return (
        <div className="App">
      <NavBar
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
      />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          }
        />
      
      <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} totalCost={calculateTotalCost()} handleCheckout={handleCheckout} user={user}/>} />
      </Routes>
      <ItemList addToCart={addToCart} searchTerm={searchTerm} />
      <Footer />
    </div>
     )
       
    }
  }, [])
  

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.product_name === item.product_name);

    if (existingItem) {
      return;
    } else {
    
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };

  const calculateTotalCost = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.unit_price;
    });
    return total;
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  };

  const handleIncrease = (index) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      newCartItems[index] = {
        ...newCartItems[index],
        quantity: newCartItems[index].quantity + 1
      };
      return newCartItems;
    });
  };

  const handleDecrease = (index) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      if (newCartItems[index].quantity > 1) {
        newCartItems[index] = {
          ...newCartItems[index],
          quantity: newCartItems[index].quantity - 1
        };
      } else {
        newCartItems.splice(index, 1);
      }
      return newCartItems;
    });
  };

  const handleCheckout = () => {
    
  };

  return (
    <div className="App">
      <NavBar
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
      />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          }
        />
      
      <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} totalCost={calculateTotalCost()} handleCheckout={handleCheckout} user={user}/>} />
      </Routes>
      <ItemList addToCart={addToCart} searchTerm={searchTerm} />
      
      <Footer />
    </div>
  );
};

export default App;