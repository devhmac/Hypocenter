import React from "react";

export default function CommentItem(props) {

  return (
    <li>
      <div>
        {props.username}
      </div>
      {props.content}
    </li>
  );
}