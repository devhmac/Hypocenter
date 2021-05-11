import React, { useContext } from 'react';
import { stateContext } from '../contextProviders/stateContext'
import ReactGlobe from 'react-globe';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './Globe.css'
import magnitudeColor from '../helpers/magnitudeColor'

export default function Globe(props) {
  const { state, setState } = useContext(stateContext);

  const toQuakePage = (marker) => {
    setTimeout(() => {
      setState({
        ...state,
        earthquake: {
          title: marker.title,
          latitude: marker.latitude,
          longitude: marker.longitude,
          depth: marker.depth,
          magnitude: marker.magnitude,
          pager: marker.pager,
          time_stamp: marker.time_stamp,
          tsunami: marker.tsunami,
        },
        mode: 'earthquake'
      })
    }, 1000);
  };

  const eqArr = state.earthquakes.map(earthquake => (

    {
      ...earthquake,
      coordinates: [earthquake.latitude, earthquake.longitude],
      color: magnitudeColor(earthquake.magnitude),
      value: earthquake.magnitude,
      date: new Date(Number(earthquake.time_stamp)).toDateString().split(' ').slice(1).join(' ')
    }
  ));

  const options = {
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 1000,
    focusEasingFunction: ['Linear', 'None'],
    globeGlowColor: 'grey',
    ambientLightColor: 'grey',
    ambientLightIntensity: 1,
    markerTooltipRenderer: marker => `${marker.title} \n${marker.date} \nMagnitude ${marker.magnitude}`,
    markerRadiusScaleRange: [0.005, 0.009],
    markerGlowRadiusScale: 0
  };

  return (
    <div className="globe" >
      <ReactGlobe
        onClickMarker={toQuakePage}
        markers={eqArr}
        options={options}
      />
    </div>
  )
}
