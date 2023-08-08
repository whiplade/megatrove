import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import "./Nav.css"
import { BsCart2 } from "react-icons/bs"

function NavBar({ cartItems, searchTerm, setSearchTerm, isLoggedIn ,setIsLoggedIn, user}) {
  
  // const auth = useAuth()


  function handleLogin(){
    window.location.assign("/login")
  } 

  function handleLogout() {
    setIsLoggedIn(false)
  }
  return (
    <div className="navbar">
      {/* Logo & Store Name*/}
      <div className="logo">
        <img
          src="https://i.pinimg.com/564x/5b/f9/1f/5bf91f056bbdf16b82f6d01c8045609b.jpg"
          alt=""
        />

      </div>
      <div className="store-name">MegaTrove</div>
      {/* SearchBar */}
      <div className="search">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {/* Cart-Icon */}
      <div className="cart-icon">
        <Link to="/cart">
          <span className="cart-badge">{cartItems.length}</span>
          <BsCart2 className="nav-icon" color="black" />
        </Link>
      </div>
      <div className="sign-in">
        {/* Sign Up Button */}
        <Link to="/signup" >
        <button>Sign Up</button>
      </Link>
      </div>
      <div className="log-in">
      {isLoggedIn?<button onClick={handleLogout} >Logout {user}</button> : <button onClick={handleLogin}>Login</button>} 
      </div>
    </div>
  );
}

export default NavBar;