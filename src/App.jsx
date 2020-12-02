import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBarComponent";
import ProductListContainer from "./containers/ProductListContainer";
import ProductDetailsContainer from "./containers/ProductDetailsContainer";
import ProductListAdministrationContainer from "./containers/ProductListAdministrationContainer";
import CartDetailsContainer from "./containers/CartDetailsContainer";
import ProductAdministrationContainer from "./containers/ProductAdministrationContainer";
import CreateNewProductContainer from "./containers/CreateNewProductContainer";
import UserContext from "./services/UserContext";

export default class App extends Component {
  state = {
    user: "",
  };

  render() {
    document.title = "E-shop";
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <UserContext.Provider value={{ user: this.state.user }}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={ProductListContainer} />
              <Route exact path="/products" component={ProductListContainer} />
              <Route
                exact
                path="/products/:id"
                component={ProductDetailsContainer}
              />
              <Route
                exact
                path="/admin/products"
                component={ProductListAdministrationContainer}
              />
              <Route
                exact
                path="/admin/products/new"
                component={CreateNewProductContainer}
              />
              <Route
                exact
                path="/admin/products/:id"
                component={ProductAdministrationContainer}
              />
              <Route
                exact
                path="/cart-products"
                component={CartDetailsContainer}
              />
              <Route path="*" component={NoMatch} />
            </Switch>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

var NoMatch = (props) => {
  var goApp = () => props.history.push("/");
  return (
    <div>
      Route did not match
      <button onClick={goApp}>Go Home</button>
    </div>
  );
};
