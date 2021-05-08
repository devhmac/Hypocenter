import React from "react";
import Styles from "./CommentButton.scss";

const Button = ({ clickHandler }) => {
  return (
    <button
      data-test="button"
      className={Styles.button}
      type="button"
      onClick={clickHandler}
    >
      GO!
    </button>
  );
};

export default Button;
