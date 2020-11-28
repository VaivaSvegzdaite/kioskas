import NavBar from "./components/NavBarComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductListContainer from "./containers/ProductListContainer";
import ProductDetailsContainer from "./containers/ProductDetailsContainer";
import ProductListAdministrationContainer from "./containers/ProductListAdministrationContainer";
import CartDetailsContainer from "./containers/CartDetailsContainer";
import ProductAdministrationContainer from "./containers/ProductAdministrationContainer";
import UserContext from "./services/UserContext";

document.title = "E-shop";

var NoMatch = (props) => {
  var goApp = () => props.history.push("/");
  return (
    <div>
      Route did not match
      <button onClick={goApp}>Go Home</button>
    </div>
  );
};

const App = (props) => (
  <div>
    <BrowserRouter>
      <UserContext.Provider value={{ username: "" }}>
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
            path="/admin/products/:id"
            component={ProductAdministrationContainer}
          />
          <Route
            exact
            path="/admin/products/new"
            component={ProductAdministrationContainer}
          />
          <Route exact path="/cart-products" component={CartDetailsContainer} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  </div>
);

export default App;
