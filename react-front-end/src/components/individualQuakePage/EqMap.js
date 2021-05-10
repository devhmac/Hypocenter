import React, { useContext } from 'react'
import { stateContext } from '../../contextProviders/StateContext'
import GoogleMapReact from 'google-map-react'
import './EqMap.css'

import LocationPin from "../LocationPin";
import { acDark } from '../mapstyles/ac-dark';


export default function EqMap(props) {
  const { state, useState } = useContext(stateContext);
  const quake = state.earthquake;
  const mapOptions = acDark;

  return (
    <div className="map">
      <div className="eqgoogle-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBRh1M71jpKwzOH6qrK6FsmmBRu7Ukzt5Q' }}
          center={{ lat: Number(quake.latitude), lng: Number(quake.longitude) }}
          defaultZoom={4}
          options={{ styles: mapOptions }}
        >
          <LocationPin
            lat={quake.latitude}
            lng={quake.longitude}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
};
