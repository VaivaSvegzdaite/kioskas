import React from "react";
import { Link } from "react-router-dom";
import img from "../img/samsung-small.jpg";

const ProductListAdministrationComponent = ({ id, ...otherProps }) => {
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
          <Link to={`/admin/products/${id}`}>{otherProps.title}</Link>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductListAdministrationComponent;
