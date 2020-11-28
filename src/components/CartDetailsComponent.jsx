import React from "react";
import img from "../img/samsung-small.jpg";

const CartDetailsComponent = ({ id, ...otherProps }) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{id}</th>
        <td>
          <img
            src={img}
            className="card-img-top"
            style={{ width: 50, height: 50 }}
            alt={otherProps.title}
          />
        </td>
        <td>
          <button className="btn btn-danger">Remove from cart</button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartDetailsComponent;
