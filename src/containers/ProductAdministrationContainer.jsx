import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ProductAdministartionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      image: '',
      description: '',
      price: '',
      quantity: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`https://itpro2017.herokuapp.com/api/products/${this.state.id}`, {
        description: this.state.description,
        id: this.state.id,
        image: this.state.image,
        price: this.state.price,
        quantity: this.state.quantity,
        title: this.state.title,
      })
      .then(() => this.props.history.push('/admin/products'));
  };

  componentDidMount() {
    axios
      .get(
        `https://itpro2017.herokuapp.com/api/products/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          image: response.data.image,
          description: response.data.description,
          price: response.data.price,
          quantity: response.data.quantity,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form className="container my-5" onSubmit={this.updateProduct}>
          <div className="form-group">
            <label htmlFor="productTitle">Title:</label>
            <input
              type="text"
              className="form-control"
              id="productTitle"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productImage">Image url:</label>
            <input
              type="text"
              alt="img"
              className="form-control"
              id="productImage"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Description:</label>
            <textarea
              className="form-control"
              id="productDescription"
              rows="3"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Price:</label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              name="price"
              onChange={this.handleChange}
              value={this.state.price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productQuantity">Quantity:</label>
            <input
              type="text"
              className="form-control"
              id="productQuantity"
              name="quantity"
              onChange={this.handleChange}
              value={this.state.quantity}
            />
          </div>
          <button type="submit" className="btn btn-primary mx-3">
            Save
          </button>
          <Link to={`/admin/products`} className="btn btn-light mx-3">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}
