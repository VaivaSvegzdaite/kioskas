import React from "react";
import { Link } from "react-router-dom";
import img from "../img/samsung-big.jpg";

const ProductCardComponent = ({
  id,
  title,
  image,
  description,
  price,
  quantity,
}) => {
  return (
    <div
      className="card col-12 col-s-12 col-md-6 col-lg-3 mx-3 my-3"
      style={{ width: "18rem" }}
    >
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title} </h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price} EUR</p>
        <p className="card-text">{quantity} untis</p>
        <Link to={`/products/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCardComponent;
