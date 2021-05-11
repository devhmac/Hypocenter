import React from "react";
import styled from "styled-components";

class Toggle extends React.Component {
  render() {
    return (
      <>
        <Input type="checkbox" id="cb" onClick={this.props.handleClick} />
        <Label htmlFor="cb">
          <ToggleBorder mode={this.props.mode}>
            <ToggleIndicator mode={this.props.mode}></ToggleIndicator>
          </ToggleBorder>
        </Label>
      </>
    );
  }
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
`;

const ToggleBorder = styled.span`
  border: 1px solid ${(props) => (props.mode === "light" ? "#1e1f26" : "white")};
  width: 50px;
  height: 20px;
  display: block;
  border-radius: 20px;
  position: relative;
`;

const ToggleIndicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  background-color: ${(props) =>
    props.mode === "light" ? "#1e1f26" : "white"};
  left: ${(props) => (props.mode === "light" ? "2px" : "32px")};
  top: 2px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
`;

export default Toggle;
