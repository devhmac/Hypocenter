import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import { stateContext } from "../../contextProviders/stateContext";
import CommentButton from "../Buttons/CommentButton";
import useDynamicHeightField from "./useDynamicHeightField";
import "./styles.css";
import cn from "classnames";


const INITIAL_HEIGHT = 46;

export default function CommentInput() {
  const { state, setListOfComments } = useContext(stateContext);
  const [comment, setComment] = useState("");

  const [isExpanded, setIsExpanded] = useState(false);
  

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, comment);

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onClose = () => {
    setComment("");
    setIsExpanded(false);
  };
  

  const save = () => {
    const newComment = {
      username: state.user.username,
      user_id: state.user.id,
      content: comment,
      earthquake_id: state.earthquake.id,
    };
    
    axios
      .post("/api/comments", newComment)
      .then(() => {
        setListOfComments((prev) => {
          return [newComment, ...prev];
        });
        setComment("");
      })
      .catch((err) => console.log(err));
  };


  return (
  <div className="container">
    <form
    onSubmit={(event) => event.preventDefault()}
      ref={containerRef}
      onMouseEnter={onExpand}
      className={cn("comment-box", {
        expanded: isExpanded,
      
        collapsed: !isExpanded,
        modified: comment.length > 0
      })}
      style={{
        minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
      }}
    >
      <div className="header">
        <div>
          <img
            src="images/orange-logo.svg"
            alt="User avatar"
          />
          <span></span>
        </div>
      </div>
      <label htmlFor="comment">Leave a comment here!</label>
      <textarea
        ref={textRef}
        onClick={onExpand}
        onFocus={onExpand}
        onChange={onChange}
        className="comment-field"
        placeholder="What's Shakin'?"
        value={comment}
        name="comment"
        id="comment"
      />
      <div className="actions">
        <button type="button" className="cancel" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" onClick={() => save()} disabled={comment.length < 1}>
          Respond
        </button>
      </div>
    </form>
  </div>
  );
}
