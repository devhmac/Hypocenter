import React, { useContext } from 'react'
import { stateContext } from '../contextProviders/stateContext'
import GoogleMapReact from 'google-map-react'
import './MainMap.css'

import LiveList from './LiveList'
import LocationPin from "./LocationPin";
import { acDark } from './mapstyles/ac-dark';
// import { lightMode } from './mapstyles/lightmode';


export default function MainMap(props) {

  const { state, setState } = useContext(stateContext);
  const mapOptions = acDark;

  const eqArr = state.earthquakes.map(earthquake => {
    return (<LocationPin
      key={earthquake.id}
      title={earthquake.title}
      lat={Number(earthquake.latitude)}
      lng={Number(earthquake.longitude)}
      depth={earthquake.depth}
      magnitude={earthquake.magnitude}
      pager={earthquake.pager}
      time_stamp={earthquake.time_stamp}
      tsunami={earthquake.tsunami}
      tooltip={`${earthquake.title} \n${new Date(Number(earthquake.time_stamp)).toDateString().split(' ').slice(1).join(' ')} \nMagnitude ${earthquake.magnitude}`}
    />
    );
  });

  return (
    <>
      <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBRh1M71jpKwzOH6qrK6FsmmBRu7Ukzt5Q' }}
            center={{ lat: 0, lng: 0 }}
            defaultZoom={1}
            options={{ styles: mapOptions }}
          >
            {eqArr}
          </GoogleMapReact>
        </div>
      </div>
    </>
  )
};
