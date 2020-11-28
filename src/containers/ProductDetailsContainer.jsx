import React, { Component } from "react";
import axios from "axios";
import ProductDetailComponent from "../components/ProductDetailComponent";

export default class ProductDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://itpro2017.herokuapp.com/api/products/${this.props.match.params.id}`
      )
      .then((res) => this.setState({ product: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.product !== null) {
      const { id, ...otherProps } = this.state.product;
      return (
        <div className="container-fluid mt-4">
          <div key={id}>
            <ProductDetailComponent id={id} {...otherProps} />
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
