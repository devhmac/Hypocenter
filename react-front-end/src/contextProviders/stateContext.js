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

  const liveListUpdate = (data) => {
    const recentEQs = [];
    for (let i = 0; i < 5; i++) {
      recentEQs.push(data[i])
    }
    return setLiveList(recentEQs);
  };

  const prependNewQuake = (data) => {
    const recentEQs = [];
    for (let quake of data) {

    }
  };


  return (
    <stateContext.Provider value={{ state, setState, liveList, setLiveList, liveListUpdate }}>
      {props.children}
    </stateContext.Provider>
  );
};
