import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your global CSS (or a separate CSS file if preferred)

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Online Library</Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse Books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
};

export default NavBar;
