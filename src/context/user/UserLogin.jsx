import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
// import axios from 'axios';

const UserLogin = () => {
  let { user, logIn, logOut } = useContext(UserContext);
  const [name, setName] = useState('');

  const addUser = (e) => {
    e.preventDefault();

    setName('');
    logIn(name);
    // getUserCart();
  };

  // const getUserCart = async () => {
  //   const result = await axios.get(
  //     `https://itpro2017.herokuapp.com/api/users/${name}/cart-products`
  //   );
  // };

  return !user ? (
    <form onSubmit={addUser} className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter username..."
      />
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
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
  );
};

export default UserLogin;
