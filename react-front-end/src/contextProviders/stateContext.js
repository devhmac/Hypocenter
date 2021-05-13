import React, { createContext, useState } from 'react';

const initialPins = {
  earthquake: {
    latitude: 0,
    longitude: 0,
  },
  mode: "main",
  earthquakes: [],
  startSite: false,
  globeLoaded: false,
};


export const stateContext = createContext(null);

export function StateProvider(props) {
  const [state, setState] = useState(initialPins);

  const setMap = function(mapid) {
    //we could use this to set the state to specific map based on the id
    setState()
  }


  return (
    <stateContext.Provider value={{ state, setState }}>
      {props.children}
    </stateContext.Provider>
  );
};
