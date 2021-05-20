import React from "react";
import Container from "../../../hoc/Container";
import { Link } from "react-router-dom";
import SampleImage from "../../../assets/images/sample.png";
import './ProductDetail.scss';
import CommentList from '../../Comments/CommentList/CommentList'

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getCurrentProduct();
  }

  getCurrentProduct = () => {
    const id = window.location.hash.substring(1);
    const products = JSON.parse(localStorage.getItem("products"));
    return products.find((item) => item.id === parseInt(id))
  };
  render() {
    return (
      <Container>
        <h1>Product Detail: </h1>
        <div className="product-detail">
          <img src={SampleImage} alt="sample" />
          <p>{this.getCurrentProduct().title}</p>
        </div>
        <hr />
        <CommentList id={this.getCurrentProduct().id} />
        <Link to="/">Back to Products</Link>
      </Container>
    );
  }
}

export default ProductDetail;
