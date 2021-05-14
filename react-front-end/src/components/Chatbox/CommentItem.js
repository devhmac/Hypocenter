import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { stateContext } from "../../contextProviders/stateContext";

export default function CommentItem(props) {
  const { state, setState } = useContext(stateContext);
  const [comment, setComment] = useState("");



  return (
    <li>
      <div>
        {props.username}
      </div>
      {props.content}
    </li>
  );
}