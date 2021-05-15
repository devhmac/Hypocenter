import React, { useState, useContext } from "react";
import axios from "axios";
import { stateContext } from "../../contextProviders/stateContext";
import CommentButton from "../Buttons/CommentButton";

export default function CommentInput() {
  const { state, setListOfComments } = useContext(stateContext);
  const [comment, setComment] = useState("");

  const save = () => {
    const newComment = {
      username: state.user.username,
      user_id: state.user.id,
      content: comment,
      earthquake_id: state.earthquake.id,
    };
    setListOfComments((prev) => {
      return [newComment, ...prev];
    });
    //axios.post("/api/comment", newComment);
    // .then(() => {
    //   setState((prev) => {
    //     //need to set this to show the new comment in the comment list
    //     return {
    //       ...prev,
    //       mode: "notificationconfirm",
    //       countryNotifications: country,
    //       magnitudeNotifications: magnitude,
    //     };
    //   });
    // });
  };

  const validate = function () {
    if (comment === "") {
      alert("Field left blank");
      return;
    }
    save();
  };

  return (
    <div className="input-form">
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <p> Comment: </p>
        <input
          className="notification-input"
          name="country"
          type="text"
          placeholder="Country to be notified of earthquakes ex. Canada"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <CommentButton onClick={() => validate()}>Comment</CommentButton>
      </form>
    </div>
  );
}
