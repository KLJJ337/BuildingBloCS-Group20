import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className="nav-link">Category</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">User Profile</Link>
              </li>
            </ul>
          </nav>
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
          </div>
        </header>
      );
}

export default Header;