import React, { useContext } from "react";
import { stateContext } from "../../contextProviders/StateContext";
import QuakeInfo from "./QuakeInfo";
import EqMap from "./EqMap";
import CommentButton from "../Buttons/CommentButton";
import DeleteButton from "../Buttons/DeleteButton";

export default function QuakePage(props) {
  const { state, useState } = useContext(stateContext);
  const quake = state.earthquake;

  return (
    <div>
      <h1>{state.title}</h1>
      <EqMap />
      <QuakeInfo />
      <CommentButton />
      <DeleteButton />
    </div>
  );
}