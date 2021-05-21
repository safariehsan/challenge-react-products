import React from "react";
import "./CommentDetail.scss";
import AvatarImage from "../../../assets/images/avatar.png";

const CommentDetail = (props) => {
  const comment = props.comment
  return (
    <div className="comment-detail">
      <img src={AvatarImage} alt='avatar' />
      <div className='comment-info'>
        <p className='comment-title'>{comment.name}</p>
        <a className='comment-email' href={`mailto:${comment.email}`}>{comment.email}</a>
        <p className='comment-body'>{comment.body}</p>
      </div>
    </div>
  );
};

export default CommentDetail;
