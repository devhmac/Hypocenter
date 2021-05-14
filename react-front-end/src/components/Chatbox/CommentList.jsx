import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { stateContext } from "../../contextProviders/stateContext";

export default function CommentInput() {
  const { state, setState } = useContext(stateContext);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get("/api/comments", state.earthquake.id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return <ul></ul>;
}
