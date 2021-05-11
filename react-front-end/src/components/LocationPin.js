import React, { useContext } from 'react'
import { stateContext } from '../contextProviders/stateContext'
import { Icon } from '@iconify/react';
import bullseyeIcon from '@iconify-icons/la/bullseye';
import magnitudeColor from '../helpers/magnitudeColor'


export default function LocationPin(props) {

  const { state, setState } = useContext(stateContext);

  const quakePage = function() {
    setState({
      ...state,
      earthquake: {
        title: props.title,
        latitude: props.lat,
        longitude: props.lng,
        depth: props.depth,
        magnitude: props.magnitude,
        pager: props.pager,
        time_stamp: props.time_stamp,
        tsunami: props.tsunami,
      },
      mode: 'earthquake'
    })
  }

  return (
    <div id={props.key} className={"pin pin--" + magnitudeColor(props.magnitude, props.pager)} onClick={quakePage}>
      <Icon icon={bullseyeIcon} className="pin-icon" />
    </div>
  )
};


// npm install --save-dev @iconify/react @iconify-icons/la
