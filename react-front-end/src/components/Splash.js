import React, { useContext } from 'react';
import { stateContext } from '../contextProviders/stateContext';
import EngageButton from './engageButton.js';
import Button from "@material-ui/core/Button";
import Fade from './Fade.js';
import './Splash.css';
import { globeLoaderContext } from '../contextProviders/globeLoaderContext'

export default function Splash() {

  const { state, setState } = useContext(stateContext);
  const { globeLoaded, setGlobeLoaded, startSite, setStartSite } = useContext(globeLoaderContext)

  return (
    <div class="splashcontrol">
    <Fade className="splash" show={!startSite}>
      <div class="splashlogo">
        <img src="/images/hypocenter.svg" alt="icon" />
      </div>
      <p className="splashDesc">
        Live earthquake data and analysis
      </p>
      <Fade show={globeLoaded}>
        <EngageButton text="Engage" onClick={() => setStartSite(true)} />
      </Fade>
    </Fade>
    </div>
  )

}
