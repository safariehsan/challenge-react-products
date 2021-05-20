import React from "react";
import ProductList from "./components/Product/ProductList/ProductList";
import ProductDetail from "./components/Product/ProductDetail/ProductDetail";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={ProductList} />
      <Route path="/product" component={ProductDetail} />
    </Router>
  );
};

export default App;
