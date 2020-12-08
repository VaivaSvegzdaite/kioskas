import React, { useContext } from 'react';
import img from '../img/samsung-small.jpg';
// import UserContext from '../context/user/UserContext';
// import axios from 'axios';

const CartDetailsComponent = ({ id, ...otherProps }) => {
  //   const { user } = useContext(UserContext);

  return (
    <tbody>
      <tr>
        <th scope="row">{id} PAVADINIMAS</th>
        <td>
          <img
            src={img}
            className="card-img-top"
            style={{ width: 50, height: 50 }}
            alt={otherProps.title}
          />
        </td>
        <td>{otherProps.title}TITLE</td>
        <td>
          <button className="btn btn-danger">Remove from cart</button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartDetailsComponent;
