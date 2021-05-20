import React, { useEffect } from "react";
import "./CommentList.scss";
import CommentDetail from "../CommentDetail/CommentDetail";
import axios from "axios";

const CommentList = (props) => {
  let comments = [];
  useEffect(() => {
    getComments();
  });

  const getComments = () => {
    console.log(props.id);
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        comments = res.data.filter((item) => {
          return item.postId === props.id;
        });
      })
      .catch((err) => console.log(err));
    console.log(comments);
    return comments;
  };

  return (
    <div className="comment-list">
      <b>comment list of product ({props.id})</b>
      {comments.map((item) => (
        <CommentDetail comment={item} />
      ))}
    </div>
  );
};

export default CommentList;
