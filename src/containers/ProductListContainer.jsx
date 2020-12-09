import React, { Component } from 'react';
import axios from 'axios';
import ProductCardComponent from '../components/ProductCardComponent';

export default class ProductListContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://itpro2017.herokuapp.com/api/products')
      .then((prod) => {
        this.setState({ products: prod });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state.products;
    console.log(data);
    if (data) {
      return (
        <div className="container-fluid mt-4">
          <div className="row d-flex justify-content-center">
            {data.map(({ id, ...otherProps }) => (
              <ProductCardComponent key={id} id={id} {...otherProps} />
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
