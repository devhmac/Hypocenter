import React from "react";

export default function CommentItem(props) {

  return (
    <div className='singleComment'>
      <div className='comment-username'>
        {props.username}
      </div>
      <div className='comment-content'>
        {props.content}
      </div>
    </div>
  );
}
