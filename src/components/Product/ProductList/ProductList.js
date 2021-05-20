import React from "react";
import axios from "axios";
import SampleImage from "../../../assets/images/sample.png";
import "./ProductList.scss";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Container from "../../../hoc/Container";
import Loading from "../../../assets/images/loading.gif";

class ProductList extends React.Component {
  state = {
    products: [],
    offset: 0,
    perPage: 8,
    currentPage: 0,
    isLoaded: false,
  };
  fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const data = res.data;
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const products = slice.map((item, index) => (
          <div className="product-item" key={index}>
            <img src={SampleImage} alt="sample" />
            <Link to={`/product#${item.id}`} key={index}>
              {item.title}
            </Link>
          </div>
        ));

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          products,
          isLoaded: true,
        });
        this.saveToLocalStorage(res.data)
      })
      .catch((err) => console.log(err));
      
  };
  saveToLocalStorage = (products) => {
    localStorage.setItem('products', JSON.stringify(products))
  };
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.fetchData();
      }
    );
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Container>
        <h1>Online Shopping</h1>
        <p>Developed by EhsanSafari as a test project for interview process</p>
        {!this.state.isLoaded && <img src={Loading} alt="loading" />}
        <div className="product-list">{this.state.products}</div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </Container>
    );
  }
}

export default ProductList;
