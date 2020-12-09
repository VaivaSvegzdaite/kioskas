import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context/UserContext';
import img from '../img/samsung-small.jpg';

const UserCart = () => {
  const [userCart, setUserCart] = useState();
  const { user, setQuantityProductInCart } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://itpro2017.herokuapp.com/api/users/${user}/cart-products`
      );
      setUserCart(res);
      setQuantityProductInCart(res.data.length);
    }
    fetchData();
  }, []);

  const deleteItemFromCart = async (productId) => {
    console.log('ID: ' + productId);
    const res = await axios.delete(
      `https://itpro2017.herokuapp.com/api/users/${user}/cart-products/${productId}`
    );
    console.log(res);
    setUserCart(res);
    setQuantityProductInCart(res.data.length);
  };

  if (userCart) {
    return (
      <div className="container">
        <p className="text-left mt-3">Your shopping cart</p>
        {userCart.data.length > 0 ? (
          userCart.data.map((product) => {
            return (
              <div key={product.id} className="container my-3">
                <div className="row">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">{product.id}</th>
                        <td>
                          <img
                            src={img}
                            className="card-img-top"
                            style={{ width: 50, height: 50 }}
                            alt={product.title}
                          />
                        </td>
                        <td>{product.title}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteItemFromCart(product.id)}
                          >
                            Remove from cart
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
        ) : (
          <p>is empty</p>
        )}
        <Link to={'/'}>
          <button className="btn btn-outline-primary float-right">
            Continue shopping
          </button>
        </Link>
      </div>
    );
  } else if (!user) {
    return <p className="m-5">Please login ... </p>;
  } else {
    return <p className="m-5">Loading...</p>;
  }
};

export default UserCart;
