import React, { Component } from 'react';
import axios from 'axios';
import CartDetailsComponent from '../components/CartDetailsComponent';
// import UserContext from '../context/user/UserContext';

export default class CartDetailsContainer extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    let user = this.context.user;
    axios
      .get(`https://itpro2017.herokuapp.com/api/users/${user}/cart-products`)
      .then((res) => this.setState({ product: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <table className="table"></table>
          <div>
            {this.state.products.map((product) => {
              return (
                <CartDetailsComponent
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  username={this.context.username}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
