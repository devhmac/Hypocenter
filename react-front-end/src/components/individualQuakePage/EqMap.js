import React, { useContext } from 'react'
import { stateContext } from '../../contextProviders/stateContext'
import GoogleMapReact from 'google-map-react'
import './EqMap.css'

import LocationPin from "../LocationPin";
import { acDark } from '../mapstyles/ac-dark';


export default function EqMap(props) {
  const { state } = useContext(stateContext);
  const quake = state.earthquake;
  const mapOptions = acDark;

  return (
    <div className="map">
      <div className="eqgoogle-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBRh1M71jpKwzOH6qrK6FsmmBRu7Ukzt5Q' }}
          center={{ lat: Number(quake.latitude), lng: Number(quake.longitude) }}
          defaultZoom={4}
          options={{styles: mapOptions}}
        >
          <LocationPin
          key={quake.id}
          title={quake.title}
          lat={Number(quake.latitude)}
          lng={Number(quake.longitude)}
          depth={quake.depth}
          magnitude={quake.magnitude}
          pager={quake.pager}
          time_stamp={quake.time_stamp}
          tsunami={quake.tsunami}
          tooltip={`${quake.title} \n${new Date(Number(quake.time_stamp)).toDateString().split(' ').slice(1).join(' ')} \nMagnitude ${quake.magnitude}`}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
};
