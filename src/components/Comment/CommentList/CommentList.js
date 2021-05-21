import React, { useEffect } from "react";
import "./CommentList.scss";
import CommentDetail from "../CommentDetail/CommentDetail";
import axios from "axios";

class CommentList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.getComments();
  }
  state = {
    comments: []
  }

  getComments = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        const comments = res.data.filter((item) => {
          return item.postId === this.props.id;
        });
        this.setState({comments})
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="comment-list">
        <hr />
        {this.state.comments.map((item, index) => (
          <CommentDetail comment={item} key={index} />
        ))}
      </div>
    );
  }
}

export default CommentList;
