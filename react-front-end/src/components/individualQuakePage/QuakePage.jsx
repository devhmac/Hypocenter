import React, { useContext } from "react";
import { stateContext } from "../../contextProviders/stateContext";
import QuakeInfo from "./QuakeInfo";
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
    <div>
      <h1>{state.earthquake.title}</h1>
      <UniversalButton onClick={setModeToMain}>Back to Globe</UniversalButton>
      <EqMap />
      <QuakeInfo />
      <CommentButton />
      <DeleteButton />
    </div>
  );
}
