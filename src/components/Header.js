import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="link">
        <h1>My Product</h1>
      </Link>
      <Link to="/Cart"  className="link">
        <h2>Cart Items</h2>
      </Link>
    </div>
  );
}

export default Header;
