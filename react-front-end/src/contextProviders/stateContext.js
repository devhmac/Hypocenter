import React, { createContext, useState } from 'react';

const initialPins = {
  earthquake: {
    latitude: 0,
    longitude: 0,
  },
  mode: "main",
  earthquakes: [],
  tooltip: ""
};


export const stateContext = createContext(null);

export function StateProvider(props) {
  const [state, setState] = useState(initialPins);
  const [liveList, setLiveList] = useState([]);

    
 
  return (
    <stateContext.Provider value={{ state, setState, liveList, setLiveList }}>
      {props.children}
    </stateContext.Provider>
  );
};
