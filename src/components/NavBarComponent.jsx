import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Username"
          />
        </form>
        <ul className="nav navbar-nav navbar-right">
          <NavLink className="nav-link navbar-right" to="/cart-products">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} /> 0 items
            </span>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
