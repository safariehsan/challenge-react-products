import React from "react";
import "./CommentDetail.scss";

const CommentDetail = (props) => {
  const comment = props.comment
  console.log(comment)
  return (
    <div className="comment-detail">
      <p>{comment.id}</p>
      <p>{comment.title}</p>
    </div>
  );
};

export default CommentDetail;
