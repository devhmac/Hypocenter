import React, { useContext } from 'react';
import { stateContext } from '../contextProviders/stateContext'
import ReactGlobe from 'react-globe';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './Globe.css'

export default function Globe(props) {
  const { state, setState } = useContext(stateContext);


  const colorMaker = function(magnitude) {

    if (magnitude <= 5.5) {
      return "lightgreen"
    } else if (magnitude > 5.5 && magnitude <= 6.5) {
      return "yellow"
    } else if (magnitude > 6.5 && magnitude <= 7.5) {
      return "orange"
    } else {
      return "red"
    }
  }

  const toQuakePage = (marker) => {
    setState({
      ...state,
      earthquake: {
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        magnitude: marker.magnitude,
        pager: marker.pager,
        date: marker.date,
        tsunami: marker.tsunami,
      },
      mode: 'earthquake'
    })
  };

  const eqArr = state.earthquakes.map(earthquake => (

    {
      ...earthquake,
      coordinates: [earthquake.latitude, earthquake.longitude],
      color: colorMaker(earthquake.magnitude),
      value: earthquake.magnitude,
      date: new Date(Number(earthquake.time_stamp)).toDateString().split(' ').slice(1).join(' ')
    }
  ));

  const options = {
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 1500,
    focusEasingFunction: ['Linear', 'None'],
    globeGlowColor: 'grey',
    markerTooltipRenderer: marker => `${marker.title} \n${marker.date} \nMagnitude ${marker.magnitude}`,
    markerRadiusScaleRange: [0.005, 0.009],
    markerGlowRadiusScale: 0
  };

  return (
    <div className="globe" >
      <ReactGlobe
        onClickMarker={marker => console.log(marker)}
        markers={eqArr}
        options={options}
      />
    </div>
  )
}
