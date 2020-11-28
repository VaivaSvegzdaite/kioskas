import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import userService from "./services/UserService";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";

ReactDOM.render(
  <BrowserRouter>
    {/* <ServicesContext.Provider value={{userService: userService}}> */}
    <App />
    {/* </ServicesContext.Provider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
