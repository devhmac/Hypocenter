import React, { useContext } from 'react'
import { stateContext } from '../contextProviders/stateContext'
import { Icon } from '@iconify/react';
import bullseyeIcon from '@iconify-icons/la/bullseye';
import magnitudeColor from '../helpers/magnitudeColor';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


export default function LocationPin(props) {

  const { state, setState } = useContext(stateContext);
  const quakePage = function(quake) {
    setState(prev => {
      return {
        ...prev,
        earthquake: {
          id: quake.key,
          title: quake.title,
          latitude: quake.lat,
          longitude: quake.lng,
          depth: quake.depth,
          magnitude: quake.magnitude,
          pager: quake.pager,
          time_stamp: quake.time_stamp,
          tsunami: quake.tsunami,
        },
        mode: 'earthquake'
      }
    })
  };
  return (
    <Tippy content={props.tooltip}>
      <div id={props.key} className={"pin pin--" + magnitudeColor(props.magnitude, props.pager)} onClick={() => quakePage(props)}>
        <Icon icon={bullseyeIcon} className="pin-icon" />
      </div>
    </Tippy>
  )
};


// npm install --save-dev @iconify/react @iconify-icons/la
