import axios from "axios";
import React from "react";
import SampleImage from "../../assets/images/sample.png";
import "./ProductList.scss";
import ReactPaginate from "react-paginate";

class ProductList extends React.Component {
  state = {
    products: [],
    offset: 0,
    perPage: 8,
    currentPage: 0,
  };
  fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const products = slice.map((item, index) => (
        <div className="product-item" key={index}>
          <img src={SampleImage} alt="sample image" />
          <p>{item.title}</p>
        </div>
      ));

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        products,
      });
    });
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
      <>
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
      </>
    );
  }
}

export default ProductList;
