import React, { useContext, useState } from 'react';
import { stateContext } from '../contextProviders/stateContext';
import EngageButton from './engageButton.js';
import UniversalButton from "./Buttons/universalButton";
import axios from "axios";

export default function DemoEarthquake() {

  const { state, setState } = useContext(stateContext);

  const setModeToMain = () => {
    setState((prev) => {
      return { ...prev, mode: "main" };
    });
  };

  const generateDemoEq = () => {

    axios.get('/api/demoON');

    return;
  }

  const deleteDemoEq = () => {

    axios.get('/api/demoOFF');

    return;
  }


  return (
      <div className="notificationHolder">

        <EngageButton text="Generate Demo Earthquake" onClick={() => generateDemoEq()} />
          <p></p>
        <EngageButton text="Delete Demo Earthquake" onClick={() => deleteDemoEq()} />
          <p></p>
        <UniversalButton onClick={setModeToMain}>Back to Home</UniversalButton>

      </div>
  )

}
