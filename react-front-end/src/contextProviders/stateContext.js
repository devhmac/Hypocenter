import React, { createContext, useState } from 'react';



const initialPins = {
  earthquake: {
    latitude: 0,
    longitude: 0,
  },
  mode: "main",
  sampleEarthquakes: [
    {
      id: 1,
      title: "40km SSW of Valsingrad, Russia",
      latitude: "50.27763",
      longitude: "87.74748",
      magnitude: "5.5",
      pager: "yellow",
      time_stamp: "1620400873733"
    },
    {
      id: 2,
      title: "30km E of Brazil",
      latitude: "7.73975",
      longitude: "-46.12468",
      magnitude: "4.5",
      pager: "green",
      time_stamp: "1620400873733"
    },
    {
      id: 3,
      title: "20km NNW of Antarctica",
      latitude: "-68.63457",
      longitude: "-158.60193",
      magnitude: "6",
      pager: "red",
      time_stamp: "1620400873733"
    },
  ],
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
