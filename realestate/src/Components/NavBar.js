import React from 'react';
import { NavLink } from 'react-router-dom';
import  '../CSS/NavBar.css' ;

function Navbar() {
    return (
      <nav className="navbar">
        <ul>
          <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/search" activeClassName="active">Search</NavLink></li>
          <li><NavLink to="/buying" activeClassName="active">Buying</NavLink></li>
          <li><NavLink to="/financing" activeClassName="active">Financing</NavLink></li>
          <li><NavLink to="/selling" activeClassName="active">Selling</NavLink></li>
          <li><NavLink to="/resources" activeClassName="active">Resources</NavLink></li>
          <li><NavLink to="/vendors" activeClassName="active">Preferred Vendors</NavLink></li>
          <li><NavLink to="/agents" activeClassName="active">Agents</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
          <li><NavLink to="/signin" activeClassName="active">Sign In</NavLink></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;