import React, { useContext } from "react";
import { stateContext } from "../../contextProviders/stateContext";
import QuakeInfo from "./QuakeInfo";
import "./QuakePage.css";
import EqMap from "./EqMap";
import CommentButton from "../Buttons/CommentButton";
import DeleteButton from "../Buttons/DeleteButton";
import UniversalButton from "../Buttons/universalButton";

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
      <CommentButton />
      <DeleteButton />
    </div>
  );
}
