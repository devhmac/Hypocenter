import React, { useContext } from "react";
import { stateContext } from "../../contextProviders/stateContext";
import QuakeInfo from "./QuakeInfo";
import EqMap from "./EqMap";

export default function QuakePage(props) {
  const { state, useState } = useContext(stateContext);
  const quake = state.earthquake;

  return (
    <div>
      <h1>state.title</h1>
      <EqMap />
      <QuakeInfo />
    </div>
  );
}
