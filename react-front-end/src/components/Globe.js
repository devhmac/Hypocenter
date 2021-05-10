import React, { useState } from 'react';
import ReactGlobe from 'react-globe';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './Globe.css'

export default function Globe(props) {

  const eqArr = props.earthquakes.map(earthquake => (
    { ...earthquake,
      coordinates: [earthquake.latitude, earthquake.longitude],
      color: earthquake.pager,
      value: earthquake.magnitude,
      date: new Date(Number(earthquake.time_stamp)).toDateString().split(' ').slice(1).join(' ')
    }
  ));

  const options = {
      cameraRotateSpeed: 0.5,
      focusAnimationDuration: 1500,
      focusEasingFunction: ['Linear', 'None'],
      globeGlowColor: 'grey',
      markerTooltipRenderer: marker => `${marker.title} \n${marker.date} \nMagnitude ${marker.value}`,
    };

  return (
      <div className = "globe" >
        <ReactGlobe
          markers={eqArr}
          options={options}
        / >
      </div>
  )
}
