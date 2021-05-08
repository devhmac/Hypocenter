import React from 'react'
import GoogleMapReact from 'google-map-react'
import './EqMap.css'

import LocationPin from "./LocationPin";

export default function EqMap(props) {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBRh1M71jpKwzOH6qrK6FsmmBRu7Ukzt5Q' }}
          defaultCenter={{lat: props.latitude, lng: props.longitude}}
          defaultZoom={4}
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
