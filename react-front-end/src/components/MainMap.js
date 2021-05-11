import React from 'react'
import GoogleMapReact from 'google-map-react'
import './MainMap.css'

import LocationPin from "./LocationPin";
import { acDark } from './mapstyles/ac-dark';
// import { lightMode } from './mapstyles/lightmode';

export default function MainMap(props) {

 const mapOptions = acDark;

  const eqArr = props.earthquakes.map(earthquake => {
    return (<LocationPin
      key={earthquake.id}
      lat={Number(earthquake.latitude)}
      lng={Number(earthquake.longitude)}
      magnitude={earthquake.magnitude}
    />
  );
});

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBRh1M71jpKwzOH6qrK6FsmmBRu7Ukzt5Q' }}
          center={{lat: 0, lng: 0}}
          defaultZoom={1}
          options={{styles: mapOptions}}
        >
          {eqArr}
        </GoogleMapReact>
      </div>
    </div>
  )
};
