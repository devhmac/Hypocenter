import React from "react";

import StyleSheet from "./style";
import Toggle from "./toggle";

class DarkMode extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      mode:
        localStorage.getItem("mode") == null
          ? "light"
          : localStorage.getItem("mode"),
    };
  }

  handleClick(event) {
    const target = event.target;
    if (target.checked && localStorage.getItem("mode") !== "dark") {
      localStorage.setItem("mode", "dark");
      this.setState({ mode: "dark" });
    } else {
      localStorage.setItem("mode", "light");
      this.setState({ mode: "light" });
    }
  }

  render() {
    return (
      <StyleSheet mode={this.state.mode} colors={this.props}>
        <Toggle handleClick={this.handleClick} mode={this.state.mode} />
        {this.props.children}
      </StyleSheet>
    );
  }
}

export default DarkMode;
