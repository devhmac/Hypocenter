import React, { useContext } from 'react';
import { stateContext } from '../contextProviders/stateContext';
import EngageButton from './engagebutton.js';
import Fade from './Fade.js';
import './Splash.css';

export default function Splash() {

  const { state, setState } = useContext(stateContext);

  const engage = () => {
    setState({
      ...state,
      startSite: true
    })
  }

  return (
    <Fade className="splash" show={!state.startSite}>
      <h1>Welcome to </h1>
      <h1> HYPOCENTER </h1>
      <p>
        Live earthquake data and analysis
      </p>
      <Fade show={state.globeLoaded}>
        <EngageButton text="Engage" onClick={engage} />
      </Fade>
    </Fade>
  )

}
