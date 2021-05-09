import React from 'react'
import GoogleMapReact from 'google-map-react'
import './EqMap.css'

import LocationPin from "./LocationPin";
import { acDark } from './mapstyles/ac-dark';

export default function EqMap(props) {

  const mapOptions = acDark;

  return (
    <div className="map">
      <div className="eqgoogle-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBRh1M71jpKwzOH6qrK6FsmmBRu7Ukzt5Q' }}
          center={{lat: Number(props.latitude), lng: Number(props.longitude)}}
          defaultZoom={4}
          options={{styles: mapOptions}}
        >
          <LocationPin
            lat={props.latitude}
            lng={props.longitude}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
};