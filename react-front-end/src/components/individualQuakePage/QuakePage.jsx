import React, { useContext } from "react";
import { stateContext } from "../../contextProviders/stateContext";
import QuakeInfo from "./QuakeInfo";
import EqMap from "./EqMap";
import CommentButton from "../Buttons/CommentButton";
import DeleteButton from "../Buttons/DeleteButton";

export default function QuakePage(props) {
  const { state } = useContext(stateContext);

  return (
    <div>
      <h1>{state.earthquake.title}</h1>
      <EqMap />
      <QuakeInfo />
      <CommentButton />
      <DeleteButton />
    </div>
  );
}
