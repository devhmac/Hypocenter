import React, { useContext } from 'react'
import { stateContext } from '../contextProviders/stateContext'
import { Icon } from '@iconify/react';
import bullseyeIcon from '@iconify-icons/la/bullseye';
import magnitudeColor from '../helpers/magnitudeColor';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


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
    <Tippy content={props.tooltip}>
      <div id={props.key} className={"pin pin--" + magnitudeColor(props.magnitude, props.pager)} onClick={quakePage}>
        <Icon icon={bullseyeIcon} className="pin-icon" />
      </div>
    </Tippy>
  )
};


// npm install --save-dev @iconify/react @iconify-icons/la
