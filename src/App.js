import React from "react";
import ProductList from "./components/ProductList/ProductList";
import Container from "./hoc/Container";
import './App.scss'

const App = () => {
  return (
    <Container>
      <h1>Product List</h1>
      <p>Developed by EhsanSafari as a test project for Malltina company</p>
      <ProductList />
    </Container>
  );
};

export default App;
