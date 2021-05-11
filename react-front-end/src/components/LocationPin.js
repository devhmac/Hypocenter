import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import bullseyeIcon from '@iconify-icons/la/bullseye';
import magnitudeColor from '../helpers/magnitudeColor'


export default function LocationPin(props) {

  return (
    <div className={"pin pin--" + magnitudeColor(props.magnitude, props.pager)}>
      <Icon icon={bullseyeIcon} className="pin-icon" />
    </div>
  )
};


// npm install --save-dev @iconify/react @iconify-icons/la
