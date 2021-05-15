import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { stateContext } from "../../contextProviders/stateContext";
import CommentItem from "./CommentItem";

export default function CommentInput() {
  const { state, setState, listOfComments, setListOfComments } =
    useContext(stateContext);

  useEffect(() => {
    console.log("just before axios");
    console.log(state.earthquake.id);
    axios
      .get(`/api/comments/${state.earthquake.id}`)
      .then((response) => {
        console.log(response.data);
        setListOfComments(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const comments = listOfComments.map((comment, index) => {
    return (
      <CommentItem
        key={index}
        username={comment.username}
        content={comment.content}
      />
    );
  });

  return <div>{comments}</div>;
}
