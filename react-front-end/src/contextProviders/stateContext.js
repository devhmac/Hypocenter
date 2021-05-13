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
    for (let i = 0; i < 6; i++) {
      recentEQs.push(data[i])
    }
    return setLiveList(recentEQs);
  };

  //takes in new pushed quake, and adds it to the front of the most recent quakes arr
  const addNewLiveListItem = (data) => {
    setLiveList(prev => {
      const recentEQs = [...prev];
      console.log('prev state list', recentEQs)
      const currentEQs = [];
      const seenEqs = {};
      for (let quake of data) {
        if (!seenEqs[quake.id]) {
          currentEQs.push(quake);
          recentEQs.pop();
          seenEqs[quake.id] = true;
        }
      }
      console.log('pushed eqs', currentEQs)
      return [...currentEQs, ...recentEQs];
    })
  };


  return (
    <stateContext.Provider value={{ state, setState, liveList, setLiveList, liveListUpdate, addNewLiveListItem }}>
      {props.children}
    </stateContext.Provider>
  );
};
