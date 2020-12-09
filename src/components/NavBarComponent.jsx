import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../context/UserContext';

const Navbar = () => {
  let { user, logIn, logOut, quantityProductInCart } = useContext(UserContext);
  const [name, setName] = useState('');

  const addUser = (e) => {
    e.preventDefault();
    setName('');
    logIn(name);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid my-2">
        <ul className="nav navbar-nav">
          <NavLink className="nav-link text-dark" to="/products">
            Home
          </NavLink>
          <NavLink className="nav-link text-dark" to="/admin/products">
            Admin
          </NavLink>
        </ul>
        {!user ? (
          <form onSubmit={addUser} className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter username..."
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Log In
            </button>
          </form>
        ) : (
          <React.Fragment>
            {' '}
            {user}
            <button
              className="ml-3 btn btn-outline-primary my-2 my-sm-0"
              onClick={logOut}
            >
              Log out
            </button>
          </React.Fragment>
        )}
        <ul className="nav navbar-nav navbar-right">
          <NavLink className="nav-link navbar-right" to="/cart-products">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="text-dark mx-2 ">
              {quantityProductInCart} items
            </span>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
