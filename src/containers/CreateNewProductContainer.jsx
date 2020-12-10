import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CreateNewProductContainer extends Component {
  state = {
    item: {
      id: 0,
      title: '',
      image: '',
      description: '',
      price: '',
      quantity: '',
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      item: { ...prevState.item, [name]: value },
    }));
  };

  createProduct = (e) => {
    e.preventDefault();

    axios
      .post(`https://itpro2017.herokuapp.com/api/products`, this.state.item)
      .then((res) => {
        console.log('Item created' + res);
        this.props.history.push('/');
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { title, image, description, price, quantity } = this.state.item;

    return (
      <div>
        <form className="container my-5" onSubmit={this.createProduct}>
          <div className="form-group">
            <label htmlFor="productTitle">Title:</label>
            <input
              type="text"
              className="form-control"
              id="productTitle"
              name="title"
              onChange={this.handleChange}
              value={title}
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
              value={image}
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
              value={description}
            ></textarea>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="productPrice">Price:</label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                name="price"
                onChange={this.handleChange}
                value={price}
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="productQuantity">Quantity:</label>
              <input
                type="text"
                className="form-control"
                id="productQuantity"
                name="quantity"
                onChange={this.handleChange}
                value={quantity}
              />
            </div>
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
export default withRouter(CreateNewProductContainer);
