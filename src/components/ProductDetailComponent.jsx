import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../img/samsung-big.jpg";
import axios from "axios";
import UserContext from "../services/UserContext";

const ProductDetailComponent = ({
  id,
  title,
  image,
  description,
  price,
  quantity,
}) => {
  const { username } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://itpro2017.herokuapp.com/api/users/${username}/cart-products`,
        {
          id: id,
          image: image,
          title: title,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title} </h5>
        <p>{description}</p>
        <p>{price}€</p>
        <p>{quantity}</p>
        <p>
          <button className="btn btn-primary mx-4" onClick={handleClick}>
            To Cart
          </button>
          <Link to={`/products`} className="btn btn-primary mx-4">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
