import React, { useContext } from "react";
import { stateContext } from "../../contextProviders/stateContext";
import QuakeInfo from "./QuakeInfo";
import "./QuakePage.css";
import EqMap from "./EqMap";
import UniversalButton from "../Buttons/universalButton";
import ChatBox from "../Chatbox/ChatBox";
import CommentButton from "../Buttons/CommentButton.jsx";
import DeleteButton from "../Buttons/DeleteButton.jsx";

export default function QuakePage(props) {
  const { state, setState } = useContext(stateContext);

  const setModeToMain = () => {
    setState((prev) => {
      return { ...prev, mode: "main" };
    });
  };

  return (
    <div class="quakepageController">
      <h1 class="quakeTitle">{state.earthquake.title}</h1>
      <div class="eqInfo">
        <QuakeInfo />
        <EqMap />
      </div>
      <UniversalButton onClick={setModeToMain}>Back to Home</UniversalButton>
      <DeleteButton />
      <ChatBox />
    </div>
  );
}
