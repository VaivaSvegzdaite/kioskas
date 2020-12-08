import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import UserLogin from '../context/user/UserLogin';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <NavLink className="nav-link" to="/products">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/admin/products">
            Admin
          </NavLink>
        </ul>
        <UserLogin />
        <ul className="nav navbar-nav navbar-right">
          <NavLink className="nav-link navbar-right" to="/cart-products">
            <FontAwesomeIcon icon={faShoppingCart} /> 0 items
            <span className="text-light mx-2 ">0 items</span>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
